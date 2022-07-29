import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./MyNotes.css";

import { useEffect, useState } from "react";
import axios from "axios";
const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title="Welcome back Adam..">
      <Link className="button" to="/createnewnote">
        Create New Note
      </Link>
      {notes.map((note) => (
        <div className="card" key={note._id}>
          <div className="card-header">
            <span>{note.title}</span>
            <div className="buttons-header">
              <a href={`/note/${note._id}`} className="edit-button">
                Edit
              </a>
              <a
                href="#delete"
                className="delete-button"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </a>
            </div>
          </div>
          <div className="card-body">
            <h4 className="category">Category - {note.category}</h4>
            <div className="content">{note.content}</div>
          </div>
        </div>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
