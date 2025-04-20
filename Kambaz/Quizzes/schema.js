import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    _id: String,
    type: { type: String, enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_BLANK"], required: true },
    title: String,
    points: Number,
    question: String,
    choices: [String],
    correctAnswer: [mongoose.Schema.Types.Mixed]
});

const quizSchema = new mongoose.Schema({
    _id: String,
    title: { type: String, default: "Untitled Quiz" },
    course: { type: String, required: true },
    points: { type: Number, default: 0 },
    type: { type: String, default: "Graded Quiz" },
    group: {type: String, default: "QUIZZES"},
    shuffleAnswers: {type: Boolean, default: false},
    timeLimit: {type: Number, default: 20},
    multipleAttempts: {type: Boolean, default: false},
    howManyAttempts: { type: Number, default: 1 },
    showCorrectAnswers: { type: String, default: "Immediately" },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockAfterAnswer: { type: Boolean, default: false },
    description: String,
    published: { type: Boolean, default: false },
    availableDate: String,
    dueDate: String,
    untilDate: String,
    questions: [questionSchema]
}, { collection: "quizzes" });

export default quizSchema;
