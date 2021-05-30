import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Русский",
    value: "ru",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Українська",
    value: "uk",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text here</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        title="Select language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <div className="ui form">
        <div className="field">
          <label>Output</label>
          <Convert text={text} language={language} />
        </div>
      </div>
    </div>
  );
};

export default Translate;
