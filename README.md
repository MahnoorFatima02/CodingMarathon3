# Coding Marathon 3

## Group 6

---

# Project Overview: 

This project is a robust job management system with user authentication. It provides a platform for creating, managing, and searching job listings, while ensuring secure user access and data protection. The system offers CRUD operations for job postings, user registration and authentication, and protected routes for authorized access. It's designed with scalability and maintainability in mind, making it suitable for both small businesses and larger enterprises looking to streamline their job posting and management processes.

# Technologies Used:

- Node.js - JavaScript runtime for server-side development<br>
- Express.js - Web application framework for Node.js<br>
- MongoDB - NoSQL database for flexible data storage<br>
- Mongoose - ODM (Object Data Modeling) library for MongoDB and Node.js<br>
- bcryptjs - Library for hashing passwords<br>
- JSON Web Tokens (JWT) - For secure authentication<br>
- Supertest - Testing library for HTTP assertions<br>
- Jest - JavaScript testing framework<br>
- dotenv - For managing environment variables<br>
- MongoDB Atlas - For deloying database on AWS Cloud variables<br>

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
cd backend-protected
npm install
npm run dev
```
Create a .env file in the root of your project and add the following environment variables:
```sh
PORT=4000
MONGO_URI=`mongodb+srv://<db_username>:<db_password>@cluster0.zvk7d.mongodb.net/<database_name>?retryWrites=true&w=majority`
SECRET=your_secret_key
NODE_ENV=development
TEST_MONGO_URI=`mongodb+srv://<db_username>:<db_password>@cluster0.zvk7d.mongodb.net/<test_database_name>?retryWrites=true&w=majority`
```

Replace <db_username>, <db_password>, <database_name>, and <test_database_name> with your actual MongoDB Atlas credentials and database names.

### Part 3

- Stop the server, if it is running.
- Navigate to the `backend-protected` directory and install the necessary dependencies:
- Rename the `.env.example` file to `.env` in the backend directory.

```sh
cd backend-protected
npm install
npm run dev
```
### Part 4
- The project uses Supertest for API testing, to run and check the jobs.test and users.test files:
  
  ```sh
   cd frontend
   npm install
   npm run dev
   npm test
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

## Front-end Conclusion

The frontend code demonstrates excellent React practices and modern development principles. It features a well-structured component hierarchy, efficient state management using hooks and context, and robust routing implementation. The code showcases strong form handling, seamless API integration, and secure authentication methods. File handling capabilities, responsive design considerations, and comprehensive error management are evident. The codebase is well-organized with clear naming conventions and logical grouping. The implementation of AuthContext highlights a solid understanding of centralized state management. Overall, the frontend architecture reflects a high level of expertise in React development, ensuring maintainability, reusability, and a smooth user experience.

### Backend

## 1. backend-protected/controllers/

### jobControllers.js

- **Functions:** Manages job-related operations
- **Explanation:**
   - Handles CRUD operations for job listings.
   - Interacts with the Job model.
   - Implements business logic for job-related features.

### userControllers.js

- **Functions:** Manages user-related operations
- **Explanation:**
   - Handles user authentication and registration
   - Uses bcrypt for secure password hashing
   - Implements user profile management features
 
## 2.backend-protected/models/

### jobModel.js

- **Functions:** Defines the schema for job listings
- **Explanation:**
   - Uses Mongoose to structure job data.
   - Sets up fields and validations for job entries.
   - Provides a model for database interactions.

### userModel.js

- **Functions:**  Defines the schema for user accounts
- **Explanation:**
   - Structures user data using Mongoose
   - Includes fields for user authentication
   - Sets up any necessary pre-save hooks or methods

## 3.backend-protected/routes/

### jobRouter.js

- **Functions:** Sets up routes for job-related endpoints
- **Explanation:**
   - Uses Express Router to define API endpoints
   - Maps HTTP requests to jobController functions
   - Implements any necessary middleware for job routes

### userRouter.js

- **Functions:** Establishes routes for user-related actions
- **Explanation:**
   - Defines endpoints for user registration, login, and profile management.
   - Connects routes to userController functions.
   - Implements authentication middleware where required.
 
## 4. backend-protected/middleware/

### requireAuth.js

- **Functions:**  Implements authentication middleware
- **Explanation:**
   - Verifies JWT tokens for protected routes
   - Ensures only authenticated users can access certain endpoints
   - Adds user information to the request object for downstream use.

### customMiddleware.js

- **Functions:**  Implements custom middleware for request processing
- **Explanation:**
   - Adds additional functionality to the request-response cycle. 
   - It includes custom error handling, request logging, or data transformation. 
   - Enhances the application's capabilities and maintainability. 

## 5. backend-protected/tests/

### jobs.test.js

- **Functions:**  Tests job-related API endpoints
- **Explanation:**
   - Uses Supertest to simulate HTTP requests
   - Verifies correct functioning of job CRUD operations
   - Ensures proper error handling and response structures
     
###  users.test.js

 - **Functions:** Tests user-related API endpoints
- **Explanation:**
   - Validates user registration and login processes
   - Checks authentication and authorization mechanisms
   - Ensures user data is properly handled and secured
     

## Backend-end Conclusion

The backend is a full-stack application with a focus on job-related functionality. It uses Express.js for backend, which is a popular and robust choice for Node.js applications.

MongoDB is being used as the database, with Mongoose as the ODM (Object Document Mapper). It is a solid choice for a flexible, document-based database system.

The user authentication, using bcrypt for password hashing and JWT for token-based authentication, which shows a good understanding of security best practices. The project structure is well-organized, with separate files for models, controllers, routes, and middleware. This separation of concerns makes the code more maintainable and easier to understand.

The project uses Supertest for API testing, which is a great tool for testing HTTP assertions.

The code demonstrates good use of async/await for handling asynchronous operations, particularly in database connections and controller functions. The backend has also implemented error handling in the database connection, which is crucial for maintaining application stability.

Overall, your code shows a good understanding of modern JavaScript backend development practices. You're using appropriate tools and libraries, and your code structure suggests a well-thought-out architecture. To further improve, you might consider adding more comprehensive error handling throughout your application, implementing input validation, and possibly adding more detailed comments to explain complex logic.

