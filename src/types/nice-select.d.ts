import "jquery";

declare global {
  interface Window { jQuery: JQueryStatic }
  interface JQuery<TElement = HTMLElement> {
    niceSelect(method?: "update" | "destroy"): JQuery<TElement>;
  }
}

