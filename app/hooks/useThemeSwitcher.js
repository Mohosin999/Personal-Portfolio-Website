import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        // Only update the state, don't change localStorage
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // No user preference in localStorage, set based on media query
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    // The function call check all the conditions on first load.
    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // If mode change and user explicitly toggles the theme, update localStorage
  useEffect(() => {
    if (mode === "dark" || mode === "light") {
      // Set the mode value in localStorage that'll be dark or light
      window.localStorage.setItem("theme", mode);

      /**
       * Now set the classList value.
       * If mode will be dark, then remove the light class and add the dark class.
       * Otherwise remove the dark class and add the light class
       */
      if (mode === "dark") {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
