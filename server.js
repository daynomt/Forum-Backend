require("dotenv").config();
const pool = require("./server/config/database");
// const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const userRouter = require("./server/api/users/user.router");
const answerRouter = require("./server/api/Answers/answer.router");
const questionRouter = require("./server/api/Questions/question.router");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);

app.use("/api/answer", answerRouter);

app.use("/api/questions", questionRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
