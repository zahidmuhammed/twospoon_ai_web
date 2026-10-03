const CALENDLY_WIDGET_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

let loadPromise: Promise<void> | null = null;

export function loadCalendlyWidget(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly?.initInlineWidget) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_WIDGET_SCRIPT}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Calendly script failed")), {
        once: true,
      });
      if (window.Calendly?.initInlineWidget) resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_WIDGET_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed"));
    document.head.appendChild(script);
  });

  return loadPromise;
}
