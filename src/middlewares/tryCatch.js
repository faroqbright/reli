 import englishMessage from "../utilities/englishMessages";
 import HTTPError from "../utilities/http-error";
 import { INTERNAL_SERVER_ERROR} from "http-status-codes";
 import logger from "../utilities/logger";

 const errorHandler =(errors) =>{
  let allErrors = errors.map(error => error.split(','));
  allErrors = allErrors.reduce((acc, val) => acc.concat(val), []);;
 let error = new HTTPError('Validation Error',allErrors.filter((data,index) => index %2 == 1), 400, allErrors.filter((data,index) => index %2 == 0));
 return error;
};
  
  export const catchAsyncErrors = (action = RequiredParam('action')) => (req, res, next) => action(req, res, next).catch((err) => 
  { 
    logger.info(err);
    let error = new HTTPError(
    englishMessage.intrnalServerError,
     INTERNAL_SERVER_ERROR);
  return next(error);
   });
  export const validationCatches = (validation = RequiredParam('validation')) => (req, res, next) => { try {
    validation(req, res, next)
  } catch (error) {
    logger.info(error);
    let finalResponse = errorHandler(error.errors); 
    return next(finalResponse);
  } 
}

    
