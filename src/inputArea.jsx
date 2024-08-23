import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

function InputArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });
  function handleinputChange(event) {
    const { name, value } = event.target;
    setInputText((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  }

  return (
    <div className="inputContainer">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleinputChange}
          value={inputText.title}
        />

        <textarea
          placeholder="enter the info"
          name="content"
          value={inputText.content}
          onChange={handleinputChange}
        />

        <AddCircleRoundedIcon
          onClick={() => {
            props.passFunction(inputText);
            setInputText({ title: "", content: "" });
          }}
        />
      </form>
    </div>
  );
}

export default InputArea;
