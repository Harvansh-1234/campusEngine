const Application = require("../models/applicationSchema");
const Job = require("../models/jobSchema");

const createJobPostRepo = async (data) => {
  try {
    const job = new Job(data);
    const result = await job.save();
    return [null, result];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while creating the Job.",
    };
    return [errObj, null];
  }
};

// get job post by query
const getJobByQueryRepo = async (query) => {
  try {
    let applications = await Job.find(query);
    // console.log(`here is the list of jobs i am ${applications}`);
    return [null, applications];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while getting the Job.",
    };
    return [errObj, null];
  }
};

// getJob info
const getJobInfo = async (query) => {
  try {
    let job = await Job.find(query);
    return [null, job];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while getting the Job.",
    };
    return [errObj, null];
  }
};

module.exports = {
  createJobPostRepo,
  getJobByQueryRepo,
  getJobInfo,
};
