import express from "express";
import passport from "passport";
import { userRouter } from "../routes/admin/admin.route";
const adminRouter = express.Router();

adminRouter.use("/users", userRouter);

adminRouter.use(
  passport.authenticate("adminUser", { session: false, failureRedirect: "/failure" })
);

export default adminRouter;
