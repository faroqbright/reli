class HTTPError extends Error {
  constructor(engMessage, errorCode, englishMessage = undefined){
    super(engMessage);
    this.englishMessage = englishMessage; 
    this.status = errorCode;
  }
};

export default HTTPError;