const pool = require("../../config/database");
// const { Question } = require("./question.service");
require("dotenv").config();
const {
  getPost,
  getQuestion,
  Question,
} = require("../Questions/question.service");

module.exports = {
  postQuestion: (req, res) => {
    const { questionTitle, questionDescription } = req.body;

    const generateUniqueId = () => {
      const timestamp = new Date().getTime().toString(36);
      const randomString = Math.random().toString(36).substring(2, 15);
      return timestamp + randomString;
    };

    if (!questionTitle && !questionDescription) {
      return res.status(400).json({ msg: "Nothing has been provided" });
    }
    if (!questionTitle) {
      return res.status(400).json({ msg: "Please provide title" });
    }

    req.body.userId = req.id;
    req.body.postId = generateUniqueId();

    Question(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      return res.status(200).json({
        msg: "New question added successfully",
        data: results,
      });
    });
  },
  getQuestions: (req, res) => {
    getQuestion((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "questions not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
  getPosts: (req, res) => {
    getPost((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "questions not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
};
