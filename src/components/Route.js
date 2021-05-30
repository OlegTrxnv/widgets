import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  // we need this state just to update Route (pathname we know anyway)
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // listen to navigation event from Link
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;

// We don't need to import React if we don't return any JSX.
// window.location.pathname comes from browser address bar and changes dynamically
// Children are components inside Routes (check App.js)
