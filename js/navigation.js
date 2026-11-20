export function initializeNavigation() {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("#primary-navigation");

  if (!menuToggle || !navigation) {
    throw new Error("The navigation menu or its toggle button was not loaded.");
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
  }

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation menu" : "Close navigation menu",
    );
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
