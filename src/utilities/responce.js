export const makeApiResponce = (message, status, statusCode, data=[]) => {
  let responce = {
    englishMessage: message,
    status: status,
    code: statusCode,
    data: data 
  };
  return responce;
};
