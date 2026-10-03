export interface UnicornStudioScene {
  destroy: () => void;
  element?: HTMLElement;
  paused?: boolean;
}

export interface UnicornStudioAddSceneOptions {
  element: HTMLElement;
  filePath?: string;
  projectId?: string | null;
  dpi?: number;
  scale?: number;
  fps?: number;
  lazyLoad?: boolean;
  fixed?: boolean;
  altText?: string;
  ariaLabel?: string;
  production?: boolean;
}

export interface UnicornStudioGlobal {
  addScene: (options: UnicornStudioAddSceneOptions) => Promise<UnicornStudioScene>;
  init: () => Promise<UnicornStudioScene[]>;
  destroy: () => void;
  scenes: UnicornStudioScene[];
  version?: string;
}

declare global {
  interface Window {
    UnicornStudio?: UnicornStudioGlobal;
  }
}

export {};
