import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { devConfig } from "../config/config.js";

export const getJWTToken = async (payload) => {
  const token = jwt.sign(payload, devConfig.secret, {
    expiresIn: "24h",
  });
  return token;
};
export const getMobileJWTToken = async (payload) => {
  const token = jwt.sign(payload, devConfig.secondSecret, {
    expiresIn: "48h",
  });
  return token;
};
export const getEncryptedPassword = async (password) => {
  const salt = await bcryptjs.genSalt();
  const hash = await bcryptjs.hash(password, salt);
  return hash;
};
export const gnerarteQrCode = async () => {
  const qr_crypto = crypto.randomBytes(24);
  const qr_code_hex = qr_crypto.toString("Hex");
  return qr_code_hex;
};

export const randomValueHex = async (len) => {
  let randomstring = crypto
    .randomBytes(Math.ceil(len / 4))
    .toString("hex")
    .slice(0, len)
    .toUpperCase();
  return randomstring;
};
//export const redeemCalculator = async