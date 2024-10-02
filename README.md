# Coding Marathon 3

- **Group 6:**
- **Link to the backend repositories:**
  - [Backend repo for API V1]
  - [Backend repo for API V2]
- **Link to the frontend repository:**
  - [Frontend repo]
- **URLs for the deployed APIs:**

  - [URL for API V1]
  - [URL for API V2]

  ***

# Usage

### Part 1

1. **Install Backend Dependencies**

   - Navigate to the `backend-no-auth` directory and install the necessary dependencies:
   - Rename the `.env.example` file to `.env` in the backend directory.

   ```sh
   cd backend-no-auth
   npm install
   npm run dev
   ```

2. **Install Frontend Dependencies & Start the App**  
   Navigate to the frontend directory, install dependencies, and start the application:

   ```sh
   cd frontend
   npm install
   npm run dev
   ```

3. **Access the App**  
   Open your browser and visit: [http://localhost:3000](http://localhost:3000)

### Part 2

- Stop the server, if it is running.
- Navigate to the `backend-auth` directory and install the necessary dependencies:
- Rename the `.env.example` file to `.env` in the backend directory.

```sh
cd backend-auth
npm install
npm run dev
```

### Part 3

- Stop the server, if it is running.
- Navigate to the `backend-protected` directory and install the necessary dependencies:
- Rename the `.env.example` file to `.env` in the backend directory.

```sh
cd backend-protected
npm install
npm run dev
```

---

## Self-Assessment of Code

### Frontend

## 1. src/components/

### Navbar.jsx

- **Functions:** Renders the navigation bar
- **Explanation:**
  - Handles user authentication status
  - Displays appropriate links
  - Manages logout functionality

## 2. src/Context/

### AuthContext.jsx

- **Functions:** Provides global authentication state
- **Explanation:**
  - Uses React Context API
  - Manages user authentication across the application

## 3. src/hooks/

### useField.jsx

- **Functions:** Custom hook for form field management
- **Explanation:**
  - Simplifies form input handling
  - Provides a reusable hook for input fields

### useLogin.jsx

- **Functions:** Manages user login process
- **Explanation:**
  - Handles API calls for user login
  - Returns login status and error information

### useSignup.jsx

- **Functions:** Manages user signup process
- **Explanation:**
  - Handles API calls for user registration
  - Includes file uploads for profile pictures

## 4. src/pages/

### AddJobPage.jsx

- **Functions:** Renders the job creation form
- **Explanation:**
  - Allows authenticated users to add new job listings

### EditJobPage.jsx

- **Functions:** Renders the job editing form
- **Explanation:**
  - Enables users to modify existing job listings
  - Pre-populates the form with current job data

### JobPage.jsx

- **Functions:** Displays detailed information about a specific job
- **Explanation:**
  - Fetches and presents comprehensive job details
  - Includes options to edit or delete for authenticated users

### Login.jsx

- **Functions:** Renders the login form
- **Explanation:**
  - Manages user authentication
  - Integrates with AuthContext for global state updates

### Signup.jsx

- **Functions:** Renders the signup form
- **Explanation:**
  - Handles new user registration
  - Includes profile picture uploads and form validation

## Conclusion

The frontend code demonstrates excellent React practices and modern development principles. It features a well-structured component hierarchy, efficient state management using hooks and context, and robust routing implementation. The code showcases strong form handling, seamless API integration, and secure authentication methods. File handling capabilities, responsive design considerations, and comprehensive error management are evident. The codebase is well-organized with clear naming conventions and logical grouping. The implementation of AuthContext highlights a solid understanding of centralized state management. Overall, the frontend architecture reflects a high level of expertise in React development, ensuring maintainability, reusability, and a smooth user experience.

### Backend

```js
// File name or function
// Your code part A
```

```js
// File name or function
// Your code part B
```
