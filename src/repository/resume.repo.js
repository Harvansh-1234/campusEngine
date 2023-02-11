const Resume = require("../models/resumeSchema");

// Create and Save a new Resume
const createResumeRepo = async (data) => {
  try {
    const resume = new Resume(data);
    const result = await resume.save();
    return [null, result];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while creating the Resume.",
    };
    return [errObj, null];
  }
};

// update resume repo
const updateResumeRepo = async (id, data) => {
  try {
    // find and upadte
    let updatedResume = await Resume.findByIdAndUpdate(id, data, {
      new: true,
    });
    return [null, updatedResume];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while updating the Resume.",
    };
    return [errObj, null];
  }
};

const updateResumeByQueryRepo = async (query, data) => {
  try {
    // find and upadte
    let updatedResume = await Resume.findOneAndUpdate(query, data, {
      new: true,
    });
    return [null, updatedResume];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while updating the Resume.",
    };
    return [errObj, null];
  }
};

const getResumeByQueryRepo = async (query) => {
  try {
    let resume = await Resume.find(query);
    return [null, resume];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while getting the Resume.",
    };
    return [errObj, null];
  }
};

module.exports = {
  createResumeRepo,
  updateResumeRepo,
  updateResumeByQueryRepo,
  getResumeByQueryRepo,
};
