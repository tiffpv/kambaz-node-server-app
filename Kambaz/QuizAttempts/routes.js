import * as dao from "./dao.js";
//import model from "./model.js";

export default function AttemptRoutes(app) {
    app.post("/api/attempts", async (req, res) => {
        const attempt = req.body;
        const result = await dao.createAttempt(attempt);
        res.json(result);
    });

    app.get("/api/attempts/:userId/:quizId/last", async (req, res) => {
        const { userId, quizId } = req.params;
        const latest = await dao.findLastAttemptByUserAndQuiz(userId, quizId);
        res.json(latest);
    });

    app.get("/api/attempts/:userId/:quizId/count", async (req, res) => {
        const { userId, quizId } = req.params;
        const count = await dao.countAttemptsByUserAndQuiz(userId, quizId);
        res.json({ count });
    });
}