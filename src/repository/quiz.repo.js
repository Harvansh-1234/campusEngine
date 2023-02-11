const Quiz = require("../models/quizSchema");
const OffCampusJobPost = require("../models/offcampusSchema");

const createQuizRepo = async (data) => {
  try {
    const quiz = new Quiz(data);
    const result = await quiz.save();
    return [null, result];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while creating the Quiz.",
    };
    return [errObj, null];
  }
};

const getQuizByQueryRepo = async (query) => {
  try {
    let quiz = await Quiz.find(query);
    return [null, quiz];
  } catch (err) {
    let errObj = {
      status: 500,
      message: err.message || "Some error occurred while getting the Quiz.",
    };
    return [errObj, null];
  }
};

// create off campus job post
const createOffCampusJobPostRepo = async (data) => {
  try {
    const offCampusJobPost = new OffCampusJobPost(data);
    const result = await offCampusJobPost.save();
    return [null, result];
  } catch (err) {
    let errObj = {
      status: 500,
      message:
        err.message ||
        "Some error occurred while creating the Off Campus Job Post.",
    };
    return [errObj, null];
  }
};

module.exports = {
  createQuizRepo,
  getQuizByQueryRepo,
  createOffCampusJobPostRepo,
};
