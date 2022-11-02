import multer, { diskStorage } from "multer";
import { sync } from "mkdirp";
import { devConfig } from "../config/config.js";

//path where images gonna save
var uploadDirectory = "/uploads";

var storage = diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname == "userImage" || file.fieldname == "allProfileImage") {
      uploadDirectory = `${devConfig.imagesPath.userImage}`;
    }
    
    sync(uploadDirectory);
    //create directories if not exist
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    var originalname = file.originalname;
    var extension = originalname.split(".");
    let filename =
      file.fieldname + "-" + Date.now() + "." + extension[extension.length - 1]; // file save with original extension
    cb(null, filename);
  },
});

var upload = multer({
  storage: storage,
});
export default upload;
