const pool = require("../../config/database");
module.exports = {
  Question: (data, callback) => {
    pool.query(
      `INSERT INTO question (question, question_description, user_id, post_id, question_code_block, tags) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        data.questionTitle,
        data.questionDescription,
        data.userId,
        data.postId,
        data.questionCode,
        data.questionTags,
      ],

      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getQuestion: (callback) => {
    pool.query(
      `
    SELECT question.*, registration.user_name
    FROM question
    INNER JOIN registration ON question.user_id = registration.user_id
    `,
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },

  getPost: (callback) => {
    pool.query(
      `
   SELECT * FROM question;
`,
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
