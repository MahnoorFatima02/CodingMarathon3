const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app"); // Adjust the path as necessary
const Job = require("../models/jobModel");

beforeAll(async () => {
  await Job.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Job.deleteMany({});
});

describe("Job API", () => {
  // Test GET /jobs
  it("should get all jobs", async () => {
    const job = new Job({
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
    });
    await job.save();

    const res = await request(app).get("/api/jobs");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe(job.title);
  });

  // Test POST /jobs
  it("should create a new job", async () => {
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

    const res = await request(app).post("/api/jobs").send(jobData);
    expect(res.status).toBe(201);
    expect(res.body.title).toBe(jobData.title);
  });

  // Test GET /jobs/:jobId
  it("should get a job by ID", async () => {
    const job = new Job({
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
    });
    await job.save();

    const res = await request(app).get(`/api/jobs/${job._id}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe(job.title);
  });

  // Test PUT /jobs/:jobId
  it("should update a job by ID", async () => {
    const job = new Job({
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
    });
    await job.save();

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

    const res = await request(app)
      .put(`/api/jobs/${job._id}`)
      .send(updatedJobData);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe(updatedJobData.title);
  });

  // Test DELETE /jobs/:jobId
  it("should delete a job by ID", async () => {
    const job = new Job({
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
    });
    await job.save();

    const res = await request(app).delete(`/api/jobs/${job._id}`);
    expect(res.status).toBe(204);
  });
});
