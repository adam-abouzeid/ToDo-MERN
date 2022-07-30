import React, { useState, useEffect } from 'react';
import MainScreen from '../../components/MainScreen';
import { useDispatch, useSelector } from 'react-redux';
import { createNoteAction } from '../../actions/notesActions';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

function CreateNote({ a }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle('');
    setCategory('');
    setContent('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    navigate('/mynotes');
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Note">
      <div>
        <h1 className="header">Create a new Note</h1>

        <form onSubmit={submitHandler} method="post">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <div controlId="title">
            <h3>Title</h3>
            <input
              name="title"
              type="text"
              value={title}
              placeholder="Enter the title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div controlId="content">
            <label>Content</label>
            <input
              name="content"
              as="textarea"
              value={content}
              placeholder="Enter the content"
              rows={4}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          {content && (
            <div>
              <h2>Note Preview</h2>
              <div>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          )}

          <div controlId="content">
            <label>Category</label>
            <input
              name="category"
              type="content"
              value={category}
              placeholder="Enter the Category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          {loading && <Loading size={50} />}
          <button type="submit" variant="primary">
            Create Note
          </button>
          <button className="mx-2" onClick={resetHandler} variant="danger">
            Reset Feilds
          </button>
        </form>
      </div>
    </MainScreen>
  );
}
export default CreateNote;
