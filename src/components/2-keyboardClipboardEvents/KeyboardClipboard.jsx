import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputValue(e.target.value);
        }}
      />

      <p className="text-start mt-4">{inputValue}</p>
    </div>
  );
};

export default KeyboardClipboard;
