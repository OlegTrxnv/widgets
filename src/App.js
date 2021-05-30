import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header"

const items = [
  {
    title: "Search widget...",
    content: "Enter a search term to find it in Wikipedia ",
  },

  {
    title: "Dropdown widget...",
    content: "Use dropdown menu to choose color",
  },

  {
    title: "Translate widget...",
    content: "Enter text to leverage Google Translate",
  },
];

const options = [
  {
    label: "Red color",
    value: "red",
  },

  {
    label: "Green color",
    value: "green",
  },

  {
    label: "Blue color",
    value: "blue",
  },
];

const App = () => {
const [selected, setSelected] = useState(options[0]);
const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <br />
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Toggle dropdown
        </button>
        <br />
        <br />
        {showDropdown ? (
          <Dropdown
            title="Select color"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
