const express = require("express");
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobControllers");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// get all jobs route
router.get("/", getAllJobs);

// get job by id route
router.get("/:jobId", getJobById);

router.use(requireAuth);

// create job route
router.post("/", createJob);

// update job route
router.put("/:jobId", updateJob);

// delete job route
router.delete("/:jobId", deleteJob);

module.exports = router;
