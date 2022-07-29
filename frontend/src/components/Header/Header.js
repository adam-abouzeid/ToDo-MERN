import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useNavigate();
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
        <div
          onClick={() => {
            localStorage.removeItem("userInfo");
            history("/");
          }}
        >
          Logout
        </div>
        <select className="dropdown">
          <option>My Profile</option>
          <option>Logout</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
