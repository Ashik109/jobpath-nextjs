import fs from "node:fs";
import path from "node:path";

function files(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]); }
const authored = [...files("src"), ...files("public")];
// The standalone showcase and documentation are intentionally served as static HTML.
const landingPage = path.join("public", "landing", "index.html");
const documentationPage = path.join("public", "documentation", "index.html");
const staticPages = new Set([landingPage, documentationPage]);
const html = authored.filter(file => /\.html?$/i.test(file) && !staticPages.has(file));
const missing = new Set();
if (!fs.existsSync(documentationPage)) missing.add(documentationPage);
if (!fs.existsSync(landingPage)) missing.add(landingPage);
else {
  const content = fs.readFileSync(landingPage, "utf8");
  for (const match of content.matchAll(/(?:src|href)\s*=\s*["']?(assets\/[^\s"'<>]+)/g)) {
    if (!fs.existsSync(path.resolve(path.dirname(landingPage), match[1]))) missing.add(`${landingPage}: ${match[1]}`);
  }
}
for (const file of files("src").filter(file => /\.(tsx|json)$/.test(file))) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(/["'](\/assets\/[^"'\s]+)["']/g)) if (!fs.existsSync(path.join("public", match[1]))) missing.add(match[1]);
}
for (const file of ["public/assets/css/style.css", "public/assets/css/plugins.min.css", "public/assets/fonts/icon/css/rt-icons.css", "public/assets/fonts/fontawesome/fontawesome.min.css"]) {
  for (const match of fs.readFileSync(file, "utf8").matchAll(/url\(["']?([^)'"\s]+)["']?\)/g)) {
    const url = match[1].split(/[?#]/)[0];
    if (!url || /^(data:|https?:|\/\/)/.test(url)) continue;
    const target = url.startsWith("/") ? path.join("public", url) : path.resolve(path.dirname(file), url);
    if (!fs.existsSync(target)) missing.add(`${file}: ${url}`);
  }
}
console.log(JSON.stringify({ htmlFiles: html.length, missingAssets: [...missing] }, null, 2));
if (html.length || missing.size) process.exitCode = 1;
