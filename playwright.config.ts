import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  expect: { timeout: 15_000 },
  workers: 2,
  fullyParallel: true,
  reporter: [["list"]],
  use: { baseURL: "http://localhost:3127", channel: "chrome", headless: true, trace: "retain-on-failure" },
  webServer: {
    command: "npm.cmd run start -- --port 3127",
    url: "http://localhost:3127",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
