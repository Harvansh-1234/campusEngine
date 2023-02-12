const Application = require("../models/applicationSchema");
const Job = require("../models/jobSchema");
const OffCampus = require("../models/applicationSchema");

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

// create application
const createApplicationRepo = async (data) => {
  try {
    const application = new Application(data);

    const result = await application.save();
    return [null, result];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while creating the Job.",
    };
    return [errObj, null];
  }
};

// get application by query
const getApplicationByQueryRepo = async (query) => {
  try {
    let applications = await Application.find(query);
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

// update job post
const updateJobPostRepo = async (query, data) => {
  try {
    let job = await Job.findOneAndUpdate(query, data, {
      new: true,
    });
    return [null, job];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while updating the Job.",
    };
    return [errObj, null];
  }
};

const getAllOffCampusJobs = async (query) => {
  try {
    let offCampusJobs = await OffCampus.find(query);
    return [null, offCampusJobs];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while getting the Job.",
    };
  }
};

module.exports = {
  createJobPostRepo,
  getJobByQueryRepo,
  getJobInfo,
  createApplicationRepo,
  getApplicationByQueryRepo,
  updateJobPostRepo,
  getAllOffCampusJobs,
};
