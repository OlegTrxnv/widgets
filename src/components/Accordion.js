import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          onClick={() => {
            onTitleClick(index);
          }}
          className={`title ${isActive}`}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;

// React.Fragment replaces <div></div> wrapper that doesn't produce any HTML
// (is used to prevent getting extra div border from semantic.ui css library)
