const UNICORN_SDK_SRC = "/assets/unicorn/unicornStudio.umd.js";

let loadPromise: Promise<NonNullable<Window["UnicornStudio"]>> | null = null;

export function loadUnicornStudio(): Promise<NonNullable<Window["UnicornStudio"]>> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Unicorn Studio can only load in the browser"));
  }

  if (window.UnicornStudio) {
    return Promise.resolve(window.UnicornStudio);
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${UNICORN_SDK_SRC}"]`,
    );
    if (existing) {
      const waitForSdk = () => {
        if (window.UnicornStudio) {
          resolve(window.UnicornStudio);
          return;
        }
        setTimeout(waitForSdk, 50);
      };
      waitForSdk();
      return;
    }

    const script = document.createElement("script");
    script.src = UNICORN_SDK_SRC;
    script.async = true;
    script.onload = () => {
      if (window.UnicornStudio) {
        resolve(window.UnicornStudio);
      } else {
        loadPromise = null;
        reject(new Error("Unicorn Studio SDK loaded but UnicornStudio global is missing"));
      }
    };
    script.onerror = () => {
      loadPromise = null;
      reject(new Error(`Failed to load Unicorn Studio SDK from ${UNICORN_SDK_SRC}`));
    };
    document.body.appendChild(script);
  });

  return loadPromise;
}
