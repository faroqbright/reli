import PassportJWT from "passport-jwt";
import passport from "passport";
import UserModel from "../models/user.model";
import { devConfig } from "../config/config.js";

export const configureJWTStartegy = () => {
  var opts = {};
  opts.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = devConfig.secret;
 
  var mobile = {};
  mobile.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  mobile.secretOrKey = devConfig.secondSecret;

  passport.use("adminUser", new PassportJWT.Strategy(opts, function (payload, done) {
        UserModel.findById(payload.id , function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }).select('-password').populate('configurationId');
    })
  );
  passport.use('mobileUser', new PassportJWT.Strategy(mobile, function (payload, done) {
      UserModel.findById(payload.id, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        } 
      }).select('-password').populate('configurationId');
    })
  );
};
