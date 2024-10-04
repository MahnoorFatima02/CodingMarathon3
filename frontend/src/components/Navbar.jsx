import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  // const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const { name, profilePictureUrl, logout, isLoggedIn } =
    useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    // setIsAuthenticated(false);
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>React Jobs</h1>
      </Link>
      <div className="links">
        {isLoggedIn && (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link to="/jobs/add-job">Add Job</Link>
            <img
              // src={
              //   JSON.parse(localStorage.getItem("user")).profile_picture === ""
              //     ? "/images/defaultavatar.jpg"
              //     : JSON.parse(localStorage.getItem("user")).profile_picture
              // }
              src={
                profilePictureUrl === ""
                  ? "/images/defaultavatar.jpg"
                  : profilePictureUrl
              }
              alt="Profile"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            {/* <span>Hello {JSON.parse(localStorage.getItem("user")).name}</span> */}
            <span>Hello {name}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
