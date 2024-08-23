import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Notes({ sendNote, sendDltFun, index }) {
  const { title, content } = sendNote;
  return (
    <div className="notesComp">
      <h3>{title}</h3>
      <h4>{content}</h4>
      <DeleteIcon
        onClick={() => {
          sendDltFun(index);
        }}
      />
    </div>
  );
}

export default Notes;
