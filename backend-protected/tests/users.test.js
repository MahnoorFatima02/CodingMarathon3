const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");

beforeAll(async () => {
  await User.deleteMany({});
});

describe("User Routes", () => {
  describe("POST /api/users/signup", () => {
    it("should signup a new user with valid credentials", async () => {
      // Arrange
      const userData1 = {
        name: "John Doe",
        username: "johndoe",
        password: "securepassword123",
        phone_number: "123-456-7890",
        gender: "Male",
        date_of_birth: "1990-01-01",
        membership_status: "Active",
        address: "123 Main St, Anytown, USA",
      };

      const userData = {
        name: "John Doe",
        username: "johndoe",
        password: "securepassword123",
        phone_number: "123-456-7890",
        gender: "Male",
        date_of_birth: "1990-01-01",
        membership_status: "Active",
        address: "123 Main St, Anytown, USA",
      };

      // Act
      const result = await api.post("/api/users/signup").send(userData);

      

      // Assert
      expect(result.status).toBe(201);
      expect(result.body).toHaveProperty("token");
    });
    it("should return an error with invalid credentials", async () => {
      const invalidUserData = {
        name: "Invalid User",
        username: "Invalid User Name",
        password: "short",
        phone_number: "123",
        gender: "Unknown",
        date_of_birth: "not-a-date",
        membership_status: "Unknown",
        address: "Invalid",
      };

      const result = await api.post("/api/users/signup").send(invalidUserData);

      expect(result.status).toBe(400);
      expect(result.body).toHaveProperty("error");
    });
  });

  describe("POST /api/users/login", () => {
    it("should login a user with valid credentials", async () => {
      // Arrange
      const userData = {
        username: "johndoe",
        password: "securepassword123",
      };

      // Act
      const result = await api.post("/api/users/login").send(userData);

      // Assert
      expect(result.status).toBe(200);
      expect(result.body).toHaveProperty("token");
    });
    it("should return an error with invalid credentials", async () => {
      const invalidLoginData = {
        username: "Invalid Username",
        password: "wrongpassword",
      };

      const result = await api.post("/api/users/login").send(invalidLoginData);

      expect(result.status).toBe(400);
      expect(result.body).toHaveProperty("error");
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
