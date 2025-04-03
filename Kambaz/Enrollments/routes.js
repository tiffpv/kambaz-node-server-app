import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments", (req, res) => {
        const { userId, courseId } = req.body;
        const status = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
    app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const status = enrollmentsDao.unenrollUserInCourse(userId, courseId);
        res.send(status);
    });
    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params;
        const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
        res.send(enrollments);
    });
    app.get("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.findAllEnrollments();
        res.send(enrollments);
    });

}