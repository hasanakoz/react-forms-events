import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      alert("please dont enter number!");
      e.preventDefault();
    }
    e.keyCode === 13 && setInputValue("");
  };

  const handleAreaPaste = (e) => {
    e.target.style.border = "2px solid red";
    e.target.value = e.clipboardData.getData("text");
    e.preventDefault();
  };

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
        onKeyDown={handleKeyDown}
        value={inputValue}
      />

      <p
        onCopy={(e) => {
          e.preventDefault();
          alert("you cannot copy");
        }}
        className="text-start mt-4"
      >
        {inputValue}
      </p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
