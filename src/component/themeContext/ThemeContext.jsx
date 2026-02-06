import ThemePage from "./ThemePage";
import ThemeContextProvider from "./ThemeContextProvider";

export default function ThemeContext() {
  return (
    <ThemeContextProvider>
      <ThemePage />
    </ThemeContextProvider>
  );
}
