export type FounderTextLine = {
  top: number;
  height: number;
};

export type FounderTextLineLayout = {
  lines: FounderTextLine[];
  translateMax: number;
};

function readLineHeightPx(paragraph: HTMLElement): number {
  const style = getComputedStyle(paragraph);
  const parsed = parseFloat(style.lineHeight);
  if (Number.isFinite(parsed)) return parsed;
  const fontSize = parseFloat(style.fontSize);
  return Number.isFinite(fontSize) ? fontSize * 1.2 : 28;
}

/** Cluster Range client rects into visual text lines relative to the mask container. */
export function measureFounderTextLines(
  paragraph: HTMLElement,
  container: HTMLElement,
): FounderTextLineLayout {
  const containerRect = container.getBoundingClientRect();
  const lineHeightPx = readLineHeightPx(paragraph);
  const tolerance = Math.max(3, lineHeightPx * 0.12);

  const range = document.createRange();
  range.selectNodeContents(paragraph);
  const rects = [...range.getClientRects()].filter(
    (rect) => rect.width > 0.5 && rect.height > 0.5,
  );

  const clusters: FounderTextLine[] = [];

  for (const rect of rects) {
    const top = rect.top - containerRect.top;
    const existingIndex = clusters.findIndex(
      (line) => Math.abs(line.top - top) <= tolerance,
    );

    if (existingIndex === -1) {
      clusters.push({ top, height: lineHeightPx });
      continue;
    }

    clusters[existingIndex]!.top = Math.min(clusters[existingIndex]!.top, top);
  }

  clusters.sort((a, b) => a.top - b.top);

  const lines = clusters.map((line) => ({
    top: line.top,
    height: lineHeightPx,
  }));

  const width = paragraph.getBoundingClientRect().width;
  const translateMax = Math.max(width + 64, 320);

  return { lines, translateMax };
}
