import express from "express";
import adminController from "../../controllers/admin/admin.controller";
import {catchAsyncErrors, validationCatches} from "../../middlewares/tryCatch";
import validation from "../../middlewares/user.validation";
import passport from "passport";

export const userRouter = express.Router();
/******************** Admin Auth ******************/
userRouter.post("/signup",validationCatches(validation.validateSignup), catchAsyncErrors(adminController.signup));
userRouter.post("/login", validationCatches(validation.validateLogin), catchAsyncErrors(adminController.login));
userRouter.post("/logout", catchAsyncErrors(adminController.logout));

userRouter.use(
  passport.authenticate("adminUser", { session: false, failureRedirect: "/failure" })
);
