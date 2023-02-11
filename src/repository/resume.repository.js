const Resume = require("../models/resumeSchema");

// Create and Save a new Resume
const createRsumeRepo = async (data) => {
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

module.exports = {
  createRsumeRepo,
  updateResumeRepo,
};
