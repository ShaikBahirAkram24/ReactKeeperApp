import { useState } from "react";
import Header from "./header";
import InputArea from "./inputArea";
import Notes from "./Notes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function DeleteNote(index) {
    setNotes(
      notes.filter((note, id) => {
        return id != index;
      })
    );
  }
  return (
    <div className="AppComp">
      <Header />
      <InputArea passFunction={addNote} />
      {notes.map((note, index) => (
        <Notes index={index} sendNote={note} sendDltFun={DeleteNote} />
      ))}
    </div>
  );
}

export default App;
