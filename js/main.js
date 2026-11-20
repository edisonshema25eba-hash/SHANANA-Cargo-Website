import { initializeNavigation } from "./navigation.js";

export function initializeHomepage() {
  initializeNavigation();

  const year = document.querySelector("[data-current-year]");

  if (!year) {
    throw new Error("The footer year placeholder was not loaded.");
  }

  year.textContent = String(new Date().getFullYear());
}
