import * as yup from 'yup';
import validationMessage from "../utilities/validation.messages";
import HTTPError from "../utilities/http-error";

 const errorHandler =(errors) =>{
  let allErrors = errors.map(error => error.split(','));
  allErrors = allErrors.reduce((acc, val) => acc.concat(val), []);;
 let error = new HTTPError('Validation Error',allErrors.filter((data,index) => index %2 == 1), 400, allErrors.filter((data,index) => index %2 == 0));
 return error;
};
export default{ 
validateSignup(req, res, next){
    let schema = yup.object({
      name: yup.string().required(validationMessage.name),
      email: yup.string().email(validationMessage.invalidEmail).required(validationMessage.email),
      password: yup.string().required(validationMessage.password),
      userType: yup.string().notRequired()
    });
    
      schema.validateSync(req.body, {abortEarly: false});
      next();
     
  },
validateLogin(req, res, next){
    let schema = yup.object({
        email: yup.string().required(validationMessage.email),
        password: yup.string().required(validationMessage.password),   
 });
 schema.validateSync(req.body, {abortEarly: false});
      next();
  }, 

validateUserSignup(req, res, next){
    let schema = yup.object({
        email: yup.string().email(validationMessage.invalidEmail).notRequired(),
        name: yup.string().notRequired(),
        phoneNumber: yup.number().required(validationMessage.phoneNumber),
    });
    schema.validateSync(req.body, {abortEarly: false});
    next();
  },  
validateGetUserProfile(req, res, next){
    let schema = yup.object({
        password: yup.string().notRequired(),
        email: yup.string().notRequired(),
        name: yup.string().notRequired(),
        phoneNumber: yup.string().notRequired(), 
   });
        schema.validateSync(req.body, {abortEarly: false});
        next();
  },  
validatePhoneCheck(req, res, next){
    let schema = yup.object({
        phoneNumber: yup.string().required(validationMessage.phoneNumber),
    });
    schema.validateSync(req.body, {abortEarly: false});
    next();
  },

validateUpdateStatus(req, res, next){
    let schema = yup.object({
      statusBit: yup.string().required(validationMessage.statusBit),
      });
      schema.validateSync(req.body, {abortEarly: false});
      next();
  },

}