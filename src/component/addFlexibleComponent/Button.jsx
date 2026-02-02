export default function Button({ children, mode = "filled", Icon, ...props }) {
  let cssClass = `button ${mode}-button`;
  if (Icon) {
    cssClass += " icon-button";
  }
  return (
    <button className={cssClass} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
