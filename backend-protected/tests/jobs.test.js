const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Job = require("../models/jobModel");

let authToken;

beforeAll(async () => {
  await Job.deleteMany({});

  // Create a test user
  const userData = {
    name: "Test User",
    username: "testuser",
    password: "testpassword",
    phone_number: "123-456-7890",
    gender: "Male",
    date_of_birth: "1990-01-01",
    membership_status: "Active",
    address: "123 Main St, Anytown, USA",
  };

  const signupResponse = await api.post("/api/users/signup").send(userData);
  authToken = signupResponse.body.token;
});

describe("Job Routes", () => {
  describe("POST /api/jobs/", () => {
    it("should create a new job with valid data", async () => {
      // Arrange
      const jobData = {
        title: "Software Engineer",
        type: "Full-time",
        description: "Seeking a talented software engineer",
        company: {
          name: "Acme Inc.",
          contactEmail: "hiring@acme.com",
          contactPhone: "123-456-7890",
        },
        location: "San Francisco, CA",
        salary: 100000,
      };

      // Act
      const result = await api
        .post("/api/jobs")
        .set("Authorization", `Bearer ${authToken}`)
        .send(jobData);

      // Assert
      expect(result.status).toBe(201);
      expect(result.body).toHaveProperty("id");
      expect(result.body.title).toBe(jobData.title);
    });

    it("should return an error with invalid job data", async () => {
      const invalidJobData = {
        title: "",
        type: "",
        description: "invalid",
        company: {
          name: "invalid",
          contactEmail: "invalid",
          contactPhone: "123",
        },
        location: "invalid",
        salary: -1,
      };

      const result = await api
        .post("/api/jobs")
        .set("Authorization", `Bearer ${authToken}`)
        .send(invalidJobData);

      expect(result.status).toBe(400);
      expect(result.body).toHaveProperty("error");
    });
  });

  describe("GET /api/jobs/", () => {
    beforeAll(async () => {
      // Clear the database before running the tests
      await Job.deleteMany({});
    });

    it("should fetch all jobs", async () => {
      // Arrange
      const jobData1 = {
        title: "Software Engineer",
        type: "Full-time",
        description: "Seeking a talented software engineer",
        company: {
          name: "Acme Inc.",
          contactEmail: "hiring@acme.com",
          contactPhone: "123-456-7890",
        },
        location: "San Francisco, CA",
        salary: 100000,
      };

      const jobData2 = {
        title: "Marketing Manager",
        type: "Full-time",
        description: "Seeking a marketing manager",
        company: {
          name: "Globex Corp.",
          contactEmail: "hiring@globex.com",
          contactPhone: "987-654-3210",
        },
        location: "New York, NY",
        salary: 80000,
      };

      await api
        .post("/api/jobs")
        .set("Authorization", `Bearer ${authToken}`)
        .send(jobData1);
      await api
        .post("/api/jobs")
        .set("Authorization", `Bearer ${authToken}`)
        .send(jobData2);

      // Act
      const result = await api.get("/api/jobs");

      // Assert
      expect(result.status).toBe(200);
      expect(result.body.length).toBe(2);
    });
  });

  // Test suite for GET /api/jobs/:jobId
  describe("GET /api/jobs/:jobId", () => {
    it("should fetch a job by ID", async () => {
      // Arrange
      const jobData = {
        title: "Software Engineer",
        type: "Full-time",
        description: "Seeking a talented software engineer",
        company: {
          name: "Acme Inc.",
          contactEmail: "hiring@acme.com",
          contactPhone: "123-456-7890",
        },
        location: "San Francisco, CA",
        salary: 100000,
      };

      const createdJob = await api
        .post("/api/jobs")
        .set("Authorization", `Bearer ${authToken}`)
        .send(jobData);

      // Act
      const result = await api
        .get(`/api/jobs/${createdJob.body.id}`)
        .set("Authorization", `Bearer ${authToken}`);

      // Assert
      expect(result.status).toBe(200);
      expect(result.body.title).toBe(jobData.title);
    });

    it("should return an error for a non-existent job ID", async () => {
      const result = await api
        .get("/api/jobs/123456789012345678901234")
        .set("Authorization", `Bearer ${authToken}`);

      expect(result.status).toBe(404);
      expect(result.body).toHaveProperty("error");
    });
  });

  // Test suite for PUT /api/jobs/:jobId
  describe("PUT /api/jobs/:jobId", () => {
    it("should update an existing job", async () => {
      // Arrange
      const jobData = {
        title: "Software Engineer",
        type: "Full-time",
        description: "Seeking a talented software engineer",
        company: {
          name: "Acme Inc.",
          contactEmail: "hiring@acme.com",
          contactPhone: "123-456-7890",
        },
        location: "San Francisco, CA",
        salary: 100000,
      };

      const createdJob = await api
        .post("/api/jobs")
        .set("Authorization", `Bearer ${authToken}`)
        .send(jobData);

      const updatedJobData = {
        title: "Senior Software Engineer",
        type: "Full-time",
        description: "Seeking an experienced software engineer",
        company: {
          name: "Acme Inc.",
          contactEmail: "hiring@acme.com",
          contactPhone: "123-456-7890",
        },
        location: "San Francisco, CA",
        salary: 120000,
      };

      // Act
      const result = await api
        .put(`/api/jobs/${createdJob.body.id}`)
        .set("Authorization", `Bearer ${authToken}`)
        .send(updatedJobData);

      // Assert
      expect(result.status).toBe(200);
      expect(result.body.title).toBe(updatedJobData.title);
      expect(result.body.salary).toBe(updatedJobData.salary);
    });

    it("should return an error for a non-existent job ID", async () => {
      const updatedJobData = {
        title: "Senior Software Engineer",
        type: "Full-time",
        description: "Seeking an experienced software engineer",
        company: {
          name: "Acme Inc.",
          contactEmail: "hiring@acme.com",
          contactPhone: "123-456-7890",
        },
        location: "San Francisco, CA",
        salary: 100000,
      };

      const result = await api
        .put("/api/jobs/123456789012345678901234")
        .set("Authorization", `Bearer ${authToken}`)
        .send(updatedJobData);

      expect(result.status).toBe(404);
      expect(result.body).toHaveProperty("error");
    });
  });

  // Test suite for DELETE /api/jobs/:jobId
  describe("DELETE /api/jobs/:jobId", () => {
    it("should delete a job by ID", async () => {
      // Arrange
      const jobData = {
        title: "Software Engineer",
        type: "Full-time",
        description: "Seeking a talented software engineer",
        company: {
          name: "Acme Inc.",
          contactEmail: "hiring@acme.com",
          contactPhone: "123-456-7890",
        },
        location: "San Francisco, CA",
        salary: 100000,
      };

      const createdJob = await api
        .post("/api/jobs")
        .set("Authorization", `Bearer ${authToken}`)
        .send(jobData);

      // Act
      const result = await api
        .delete(`/api/jobs/${createdJob.body.id}`) // Ensure the correct property
        .set("Authorization", `Bearer ${authToken}`);

      // Assert
      expect(result.status).toBe(204);
    });
    it("should return an error for a non-existent job ID", async () => {
      const result = await api
        .delete("/api/jobs/6789012345678901234")
        .set("Authorization", `Bearer ${authToken}`);

      expect(result.status).toBe(404);
      expect(result.body).toHaveProperty("error");
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});