import { BAD_REQUEST, OK, NOT_FOUND, CONFLICT  } from "http-status-codes";
import bcryptjs from "bcryptjs";
import UserModel from "../../models/user.model";
import { getMobileJWTToken } from "../../utilities/util";
import { makeApiResponce } from "../../utilities/responce";
import HTTPError from "../../utilities/http-error";
import englishMessage from "../../utilities/englishMessages";

export default {
  async signup(req, res, next) {   //signup an user
    let blocked = {email: req.body.email, statusBit: "false"}
  let blockUser = await UserModel.findOne(blocked);
  if (blockUser) {
    let err = new HTTPError(
      englishMessage.blocked,
        NOT_FOUND
    );
    return next(err);
  }
      const userQuery = { email: req.body.email};
      let user = await UserModel.findOne(userQuery).populate('rolesId');
      if (!user) {
        let err = new HTTPError(
          englishMessage.notFound,
            NOT_FOUND
        );
        return next(err);
      } 
      const matched = await bcryptjs.compare(req.body.password, user.password);
      if (!matched) { 
         let err = new HTTPError(
           englishMessage.invalidCredentials,
           BAD_REQUEST
      );
      return next(err);
    }
    
      const token = await getMobileJWTToken({ id: user._id });
      let userResponce;
      user.password = undefined;
      userResponce = Object.assign({},{user}, {token: token });
      let result = makeApiResponce(
        englishMessage.Ok,
        1,
        OK,
        userResponce
      );
      return res.json(result);
  }
  
};