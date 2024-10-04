const express = require("express");
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobControllers");

const router = express.Router();

// get all jobs route
router.get("/", getAllJobs);

// create job route
router.post("/", createJob);

// get job by id route
router.get("/:jobId", getJobById);

// update job route
router.put("/:jobId", updateJob);

// delete job route
router.delete("/:jobId", deleteJob);

module.exports = router;
