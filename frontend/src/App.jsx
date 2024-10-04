import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";

// pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import JobPage from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   return user && user.token ? true : false;
  // });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
        // isAuthenticated={isAuthenticated}
        // setIsAuthenticated={setIsAuthenticated}
        />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/jobs/:id"
              element={<JobPage />}
              // element={<JobPage isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/jobs/add-job"
              element={isLoggedIn ? <AddJobPage /> : <Navigate to="/signup" />}
              // element={
              //   isAuthenticated ? <AddJobPage /> : <Navigate to="/signup" />
              // }
            />
            <Route
              path="/edit-job/:id"
              element={isLoggedIn ? <EditJobPage /> : <Navigate to="/signup" />}
              // element={
              //   isAuthenticated ? <EditJobPage /> : <Navigate to="/signup" />
              // }
            />
            <Route
              path="/signup"
              element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
              // element={
              //   isAuthenticated ? (
              //     <Navigate to="/" />
              //   ) : (
              //     <Signup setIsAuthenticated={setIsAuthenticated} />
              //   )
              // }
            />
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Login />
                  // <Login setIsAuthenticated={setIsAuthenticated} />
                )
              }
              // element={
              //   isAuthenticated ? (
              //     <Navigate to="/" />
              //   ) : (
              //     <Login setIsAuthenticated={setIsAuthenticated} />
              //   )
              // }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
