export default function Button({
  children,
  mode = "filled",
  Icon,
  className,
  ...props
}) {
  let cssClass = `button ${mode}-button`;

  if (className) {
    cssClass += " " + className;
  }

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
