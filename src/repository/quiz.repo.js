const Quiz = require("../models/quizSchema");

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

module.exports = {
  createQuizRepo,
  getQuizByQueryRepo,
};
