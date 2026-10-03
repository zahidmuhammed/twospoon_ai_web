export const LINE_REVEAL_TRANSLATE_MAX = 1120.96;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/** Linear scroll → translateX so reveal moves at constant speed across the line. */
export function lineRevealTranslateX(scrollProgress: number): number {
  return clamp(scrollProgress, 0, 1) * LINE_REVEAL_TRANSLATE_MAX;
}
