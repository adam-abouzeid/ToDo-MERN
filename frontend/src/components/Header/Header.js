import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className="Navbar">
      <div className="Logo">
        <Link to="/">NoteZipper</Link>
      </div>
      <div className="search-bar-div">
        <form>
          <input
            className="search-bar"
            type="text"
            name="name"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="routes">
        <Link to="/mynotes">My Notes</Link>
        <button onClick={logoutHandler}>Logout</button>
        <select className="dropdown">
          <option>My Profile</option>
          <option>Logout</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
