const componentContainers = document.querySelectorAll("[data-component]");

async function loadComponent(container) {
  const componentPath = container.dataset.component;

  if (!componentPath) {
    throw new Error("A component container is missing its data-component path.");
  }

  const response = await fetch(componentPath);

  if (!response.ok) {
    throw new Error(`Could not load ${componentPath} (HTTP ${response.status}).`);
  }

  container.innerHTML = await response.text();
}

function showLoadingError(error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errorPanel = document.querySelector("#component-error");

  console.error("ORENTA page initialization failed:", error);

  if (errorPanel) {
    errorPanel.hidden = false;
    errorPanel.textContent =
      `The page could not be fully loaded. Make sure it is served over HTTP (for example, with Live Server). Details: ${errorMessage}`;
  }
}

async function startHomepage() {
  try {
    if (componentContainers.length === 0) {
      throw new Error("No component containers were found in index.html.");
    }

    await Promise.all(Array.from(componentContainers, loadComponent));

    const { initializeHomepage } = await import("./main.js");
    initializeHomepage();
  } catch (error) {
    showLoadingError(error);
  }
}

startHomepage();
