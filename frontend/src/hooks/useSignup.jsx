// import { useState } from "react";

// export default function useSignup(url) {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);

//   const signup = async (formData) => {
//     setIsLoading(true);
//     setError(null);
//     console.log(formData);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });

//       const user = await response.json();

//       if (!response.ok) {
//         throw new Error(user.error || "Signup failed");
//       }

//       localStorage.setItem("user", JSON.stringify(user));
//       setIsLoading(false);
//       return user;
//     } catch (err) {
//       setError(err.message);
//       setIsLoading(false);
//       return null;
//     }
//   };

//   return { signup, isLoading, error };
// }

import { useState } from "react";

export default function useSignup(url) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (object) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });
    const user = await response.json();

    if (!response.ok) {
      console.log(user.error);
      setError(user.error);
      setIsLoading(false);
      return error;
    }

    // localStorage.setItem("user", JSON.stringify(user));
    setIsLoading(false);
    return user;
  };

  return { signup, isLoading, error };
}
