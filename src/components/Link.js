import React from "react";

const Link = ({ href, className, children }) => {
  const onClickHandler = (event) => {
    // Handle Ctrl+Click to open new tab and navigate to href on this link:
    // return early and let browser do it's normal thing
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();
    // change URL in address bar to href when navigating
    window.history.pushState({}, "", href);

    // navigation event tells Route components that URL just changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClickHandler} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
