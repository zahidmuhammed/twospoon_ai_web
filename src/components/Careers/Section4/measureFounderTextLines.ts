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

type LineCluster = {
  minTop: number;
  maxBottom: number;
};

/** Cluster Range client rects into visual text lines relative to the mask container. */
export function measureFounderTextLines(
  paragraph: HTMLElement,
  container: HTMLElement,
): FounderTextLineLayout {
  const containerRect = container.getBoundingClientRect();
  const lineHeightPx = readLineHeightPx(paragraph);
  const verticalPad = 2;
  const mergeMidThreshold = lineHeightPx * 0.5;

  const range = document.createRange();
  range.selectNodeContents(paragraph);
  const rects = [...range.getClientRects()].filter(
    (rect) => rect.width > 0.5 && rect.height > 0.5,
  );

  const fragments = rects.map((rect) => {
    const top = rect.top - containerRect.top;
    const bottom = rect.bottom - containerRect.top;
    return { top, bottom, mid: (top + bottom) / 2 };
  });

  fragments.sort((a, b) => a.mid - b.mid);

  const clusters: LineCluster[] = [];

  for (const fragment of fragments) {
    let cluster = clusters.find((candidate) => {
      const clusterMid = (candidate.minTop + candidate.maxBottom) / 2;
      return Math.abs(fragment.mid - clusterMid) < mergeMidThreshold;
    });

    if (!cluster) {
      cluster = { minTop: fragment.top, maxBottom: fragment.bottom };
      clusters.push(cluster);
      continue;
    }

    cluster.minTop = Math.min(cluster.minTop, fragment.top);
    cluster.maxBottom = Math.max(cluster.maxBottom, fragment.bottom);
  }

  clusters.sort((a, b) => a.minTop - b.minTop);

  const lines = clusters.map((cluster) => {
    const inkHeight = cluster.maxBottom - cluster.minTop;
    const height = Math.max(lineHeightPx, inkHeight + verticalPad * 2);
    const top = Math.max(0, cluster.minTop - (height - inkHeight) / 2);

    return {
      top: Math.round(top * 10) / 10,
      height: Math.round(height * 10) / 10,
    };
  });

  const width = paragraph.getBoundingClientRect().width;
  const translateMax = Math.max(width + 64, 320);

  return { lines, translateMax };
}
