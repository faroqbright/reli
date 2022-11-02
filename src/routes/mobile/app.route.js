import express from "express";
import appController from "../../controllers/mobile/app.controller.js";
import passport, { authenticate } from "passport";
import {catchAsyncErrors, validationCatches} from "../../middlewares/tryCatch";
import validation from "../../middlewares/user.validation";
const appRouter = express.Router();

/*************** Auth Apis **************/
appRouter.post("/signup", validationCatches(validation.validateUserSignup), 
catchAsyncErrors(appController.signup));
 appRouter.use(
   passport.authenticate("mobileUser", { session: false, failureRedirect: "/failure" }) 
 );

export default appRouter;
