import React from "react";
import ThemeHeader from "./ThemeHeader";
import { ThemeContext } from "./ThemeContextProvider";

export default function ThemePage() {
  const themeCtx = React.useContext(ThemeContext);

  return (
    <div id="theme-page" className={themeCtx.theme}>
      <ThemeHeader />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
