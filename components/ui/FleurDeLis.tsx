interface FleurDeLisProps {
  className?: string;
}

/**
 * The Bayou brand mark — a fleur-de-lis, echoing the gold storefront sign
 * on Oliver Plunkett Street. Inherits `currentColor`, so colour it via the
 * surrounding text colour (e.g. `text-bayou-brass/40`).
 *
 * Symmetric about x=12 in a 24×24 viewBox.
 */
export default function FleurDeLis({ className }: FleurDeLisProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 1.8C10.6 3.6 10.6 5.8 12 7.6C13.4 5.8 13.4 3.6 12 1.8ZM12 8.4C10.8 7 8.9 6.7 7.6 7.9C6.2 9.1 6.4 11.1 7.9 12.2C6.9 12.4 5.9 12.1 5.2 11.4C5.4 13.6 7.1 15.2 9.3 15.3L9.3 16.4L7.4 16.4L7.4 17.8L11.2 17.8L11.2 22L12.8 22L12.8 17.8L16.6 17.8L16.6 16.4L14.7 16.4L14.7 15.3C16.9 15.2 18.6 13.6 18.8 11.4C18.1 12.1 17.1 12.4 16.1 12.2C17.6 11.1 17.8 9.1 16.4 7.9C15.1 6.7 13.2 7 12 8.4Z" />
    </svg>
  );
}
