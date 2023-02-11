// quiz schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new mongoose.Schema(
  {
    quizName: {
      type: String,
      required: true,
      trim: true,
    },
    quizDescription: {
      type: String,
      required: true,
      trim: true,
    },
    quizDuration: {
      type: Number,
      required: true,
      trim: true,
    },
    quizQuestions: [
      {
        question: {
          type: String,
          required: true,
          trim: true,
        },
        options: [
          {
            option: {
              type: String,
              required: true,
              trim: true,
            },
          },
        ],
        correctAnswer: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    minScoreRequired: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model("quiz", quizSchema);

module.exports = Quiz;
