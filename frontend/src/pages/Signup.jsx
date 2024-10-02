import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const name = useField("text");
  const username = useField("text");
  const password = useField("password");
  const phoneNumber = useField("text");
  const gender = useField("text");
  const dateOfBirth = useField("date");
  const membershipStatus = useField("text");
  const address = useField("text");
  const profilePicture = useField("file");

  const { signup, error } = useSignup("/api/users/signup");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("username", username.value);
    formData.append("password", password.value);
    formData.append("phone_number", phoneNumber.value);
    formData.append("gender", gender.value);
    formData.append("date_of_birth", dateOfBirth.value);
    formData.append("membership_status", membershipStatus.value);
    formData.append("address", address.value);
    if (profilePicture.value) {
      formData.append("profile_picture", profilePicture.value);
    }

    await signup(formData);
    if (!error) {
      console.log("success");
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <div className="create">
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input {...name} />
        <label>Username:</label>
        <input {...username} />
        <label>Password:</label>
        <input {...password} />
        <label>Phone Number:</label>
        <input {...phoneNumber} />
        <label>Gender:</label>
        <input {...gender} />
        <label>Date of Birth:</label>
        <input {...dateOfBirth} />
        <label>Membership Status:</label>
        <input {...membershipStatus} />
        <label>Address:</label>
        <input {...address} />
        <label>Profile Picture:</label>
        <input {...profilePicture} />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;

// import useField from "../hooks/useField";
// import useSignup from "../hooks/useSignup";
// import { useNavigate } from "react-router-dom";

// const Signup = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();
//   const name = useField("text");
//   const email = useField("email");
//   const password = useField("password");
//   const phoneNumber = useField("text");
//   const gender = useField("text");
//   const dateOfBirth = useField("date");
//   const membershipStatus = useField("text");

//   const { signup, error } = useSignup("/api/users/signup");

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     await signup({
//       email: email.value,
//       password: password.value,
//       name: name.value,
//       phone_number: phoneNumber.value,
//       gender: gender.value,
//       date_of_birth: dateOfBirth.value,
//       membership_status: membershipStatus.value,
//     });
//     if (!error) {
//       console.log("success");
//       setIsAuthenticated(true);
//       navigate("/");
//     }
//   };

//   return (
//     <div className="create">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label>Name:</label>
//         <input {...name} />
//         <label>Email address:</label>
//         <input {...email} />
//         <label>Password:</label>
//         <input {...password} />
//         <label>Phone Number:</label>
//         <input {...phoneNumber} />
//         <label>Gender:</label>
//         <input {...gender} />
//         <label>Date of Birth:</label>
//         <input {...dateOfBirth} />
//         <label>Membership Status:</label>
//         <input {...membershipStatus} />
//         <button>Sign up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
