export function Section({ className, children, level=1, ...props }) {
  return (
    <div  className={className}>
      <div
        className={`body-column section-${level} container px-2 py-6 ${className}`}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
