import express from "express";
import appRouter from "../routes/mobile/app.route.js";
const apiRouter = express.Router();

apiRouter.use("/app", appRouter);
export default apiRouter;