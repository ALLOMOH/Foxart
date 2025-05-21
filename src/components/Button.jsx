const Button = ({ children, theme, className, href }) => {

  const baseClass = "text-white hover:text-white";
  const themeClasses =
    theme === "primary"
      ? "bg-p-3 hover:bg-p-2"
      : theme === "secondary" && "bg-n-7 hover:bg-p-3";

  const renderButton = () => (
    <button
      type="submit"
      className={`button px-3 py-3 lg:px-4 lg:py-4 rounded-lg ${themeClasses} ${baseClass} ${className}`}
    >
      {children}
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      role="button"
      className={`button px-3 inline-block py-3 lg:px-4 lg:py-4 rounded-lg no-underline ${themeClasses} ${baseClass} ${className}`}
    >
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
