export function BookCallArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 9 9"
      width={9}
      height={9}
      overflow="visible"
      aria-hidden
    >
      <path
        d="M 0 0 L 9 0 L 9 9 M 0 9 L 9 0"
        fill="transparent"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
