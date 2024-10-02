import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

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
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      console.log("File selected:", file.name);
    }
    // const file = profilePicture.value;
    console.log(file);
    // const fileName = `${Date.now()}`;
    // const filePath = `../../public/images/${fileName}`;

    // Save file to public folder
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/users/upload", {
      method: "POST",
      body: formData,
    });

    const filePath = await response.json();

    setProfilePictureUrl(filePath["filePath"]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signup({
      name: name.value,
      username: username.value,
      password: password.value,
      phone_number: phoneNumber.value,
      gender: gender.value,
      date_of_birth: dateOfBirth.value,
      membership_status: membershipStatus.value,
      address: address.value,
      profile_picture: profilePictureUrl,
    });
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
        <input
          {...profilePicture}
          onChange={handleFileUpload}
          accept="image/*"
          style={{ display: "none" }}
          id="profile-picture-input"
        />
        <label
          htmlFor="profile-picture-input"
          className="custom-file-upload"
          style={{
            display: "inline-block",
            padding: "6px 12px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
        >
          {selectedFileName || "Choose file"}
        </label>
        <br />
        <br />
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
