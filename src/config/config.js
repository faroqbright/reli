import * as dotenv from "dotenv";
import configEmail from "../models/configEmail.model";

dotenv.config({ path: ".env" });

export const configDynaEmail = async () => {
  const isConfigEmail = await configEmail.findOne({});
  let email = {
    "SERVICE" : "Gmail",
    "USER": isConfigEmail.email,
    "PASSWORD": isConfigEmail.password,
    "USERPASSWORD": isConfigEmail.password,
    "FROM": isConfigEmail.email,
  };
  return email;
};


const BASE_IMAGE_URL = "http://localhost:6262";
const ROUTE_IMAGE_PATH = "src/uploads/images"; //FOR DEV

export const devConfig = {
  port: process.env.PORT,
  adminPanelRoles: process.env.ADMIN_PANEL_ROLES,
  db_username: process.env.DATABASE_USERNAME,
  db_password: process.env.DATABASE_PASSWORD,
  db_name: process.env.DATABASE_NAME,
  db_host: process.env.DATABASE_HOST,
  secret: process.env.SECRET_KEY,
  secondSecret: process.env.SECOND_SECRET_KEY,
  imagesPath: {
    userImage:     `${ROUTE_IMAGE_PATH}/users`,
  },
  getImagesPath: {
    userImage:     `${BASE_IMAGE_URL}/users`,
  },
 
  email: {
    SERVICE: "Gmail",
    USER: "test@gmail.com",
    PASSOWRD: "bS@qazwsx123",
    FROM: "test@gmail.com",
  },
};
