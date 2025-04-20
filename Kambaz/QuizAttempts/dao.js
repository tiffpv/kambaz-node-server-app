import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function createAttempt(attempt) {
    const newAttempt = { ...attempt, _id: uuidv4() };
    return model.create(newAttempt);
}
export function findAttemptsByUserAndQuiz(userId, quizId) {
    return model.find({ user: userId, quiz: quizId });
}
export function findLastAttemptByUserAndQuiz(userId, quizId) {
    return model.findOne({ user: userId, quiz: quizId })
      .sort({ submittedAt: -1 });
}
export function countAttemptsByUserAndQuiz(userId, quizId) {
    return model.countDocuments({ user: userId, quiz: quizId });
}
  
