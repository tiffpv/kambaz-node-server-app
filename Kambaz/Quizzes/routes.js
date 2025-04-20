import * as dao from "./dao.js";
import model from "./model.js";

export default function QuizRoutes(app) {
    app.get("/api/courses/:courseId/quizzes", async (req, res) => {
      const { courseId } = req.params;
      const quizzes = await dao.findQuizForCourse(courseId);
      res.send(quizzes);
    });
    app.get("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quiz = await dao.findQuizById(quizId);
        res.send(quiz);
    });
    app.post("/api/courses/:courseId/quizzes", async (req, res) => {
        const { courseId } = req.params;
        const quiz = { ...req.body, course: courseId };
        const newQuiz = await dao.createQuiz(quiz);
        res.send(newQuiz);
    });
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.deleteQuiz(quizId);
        res.send(status);
    });
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await dao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });
    app.put("/api/quizzes/:quizId/publish", async (req, res) => {
        const { quizId } = req.params;
        const updated = await dao.publishQuiz(quizId);
        res.send(updated);
    });
}