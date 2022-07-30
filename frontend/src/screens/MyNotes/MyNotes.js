import { Link, Navigate, useNavigate } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import './MyNotes.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { listNotes } from '../../actions/notesActions';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
const MyNotes = () => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate('/');
    }
  }, [dispatch]);
  return (
    <MainScreen title={`Welcome back ${userInfo.name} `}>
      <Link className="button" to="/createnote">
        Create New Note
      </Link>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes?.map((note) => (
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
