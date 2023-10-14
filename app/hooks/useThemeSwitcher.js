import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");
  console.log("Mode Value --> ", mode);

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

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // If mode change and user explicitly toggles the theme, update localStorage
  useEffect(() => {
    if (mode === "dark" || mode === "light") {
      window.localStorage.setItem("theme", mode);
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;

// import React, { useEffect, useState } from "react";

// const useThemeSwitcher = () => {
//   const preferDarkQuery = "(prefer-color-scheme: dark)";
//   const [mode, setMode] = useState("");
//   console.log("Mode Value --> ", mode);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const userPref = window.localStorage.getItem("theme");

//     const handleChange = () => {
//       if (userPref) {
//         let check = userPref === "dark" ? "dark" : "light";
//         setMode(check);
//         if (check === "dark") {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       } else {
//         let check = mediaQuery.matches ? "dark" : "light";
//         setMode(check);
//         if (check === "dark") {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       }
//     };

//     /**
//      * The function call check all the conditions on first load.
//      * If theme is dark, when I reload the page then it will be dark.
//      * And if it's light, then it will be light by reloading or refreshing.
//      */
//     // handleChange();

//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   // If mode change, set value in local storage
//   useEffect(() => {
//     if (mode === "dark") {
//       window.localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       window.localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, [mode]);

//   return [mode, setMode];
// };

// export default useThemeSwitcher;
