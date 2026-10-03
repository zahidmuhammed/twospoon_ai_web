"use client";

import type { ReactNode } from "react";
import { useEffect, useId, useRef } from "react";
import type { UnicornStudioScene } from "@/types/unicorn-studio";
import { loadUnicornStudio } from "./loadUnicornStudio";

export type UnicornEmbedId = "embed_001" | "embed_002";

export interface UnicornSceneProps {
  embed: UnicornEmbedId;
  className?: string;
  lazyLoad?: boolean;
  dpi?: number;
  scale?: number;
  fps?: number;
  altText?: string;
  ariaLabel?: string;
  children?: ReactNode;
}

export function UnicornScene({
  embed,
  className,
  lazyLoad = true,
  dpi = 1.5,
  scale = 1,
  fps = 60,
  altText = "",
  ariaLabel = "Unicorn Studio Scene",
  children,
}: UnicornSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<UnicornStudioScene | null>(null);
  const reactId = useId();
  const scriptId = `unicorn-${embed}-${reactId.replace(/:/g, "")}`;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    const teardown = () => {
      sceneRef.current?.destroy();
      sceneRef.current = null;
      host.removeAttribute("data-us-initialized");
      host.removeAttribute("data-scene-id");
      document.getElementById(scriptId)?.remove();
    };

    (async () => {
      try {
        const response = await fetch(`/assets/unicorn/embeds/${embed}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load embed ${embed}: ${response.status}`);
        }
        const projectJson = await response.text();
        if (cancelled) return;

        const jsonScript = document.createElement("script");
        jsonScript.id = scriptId;
        jsonScript.type = "application/json";
        jsonScript.textContent = projectJson;
        document.body.appendChild(jsonScript);

        const sdk = await loadUnicornStudio();
        if (cancelled) return;

        const existing = sdk.scenes?.find((scene) => scene.element === host);
        existing?.destroy();

        const scene = await sdk.addScene({
          element: host,
          filePath: scriptId,
          dpi,
          scale,
          fps,
          lazyLoad,
          altText,
          ariaLabel,
        });
        if (cancelled) {
          scene.destroy();
          return;
        }
        sceneRef.current = scene;
      } catch (error) {
        console.error("[UnicornScene] Failed to initialize scene", error);
        teardown();
      }
    })();

    return () => {
      cancelled = true;
      teardown();
    };
  }, [embed, scriptId, dpi, scale, fps, lazyLoad, altText, ariaLabel]);

  return (
    <div ref={hostRef} className={className}>
      {children}
    </div>
  );
}
