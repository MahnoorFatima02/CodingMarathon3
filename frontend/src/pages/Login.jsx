import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const { authLogin } = useContext(AuthContext);
  const username = useField("text");
  const password = useField("password");

  const { login, error } = useLogin("/api/users/login");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = await login({
      username: username.value,
      password: password.value,
    });
    if (userData) {
      authLogin(userData);
      console.log("success");
      // setIsAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <div className="create">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input {...username} />
        <label>Password:</label>
        <input {...password} />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

// import useField from "../hooks/useField";
// import useLogin from "../hooks/useLogin";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();
//   const email = useField("email");
//   const password = useField("password");

//   const { login, error } = useLogin("/api/users/login");

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     await login({ email: email.value, password: password.value });
//     if (!error) {
//       console.log("success");
//       setIsAuthenticated(true);
//       navigate("/");
//     }
//   };

//   return (
//     <div className="create">
//       <h2>Login</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label>Email address:</label>
//         <input {...email} />
//         <label>Password:</label>
//         <input {...password} />
//         <button>Sign up</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
