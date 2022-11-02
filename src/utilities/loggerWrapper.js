class loggerWrapper{
  constructor(log) {
    this.log = log;
  }

  info(data) {
    return this.log.info(data);
  }
}

export default loggerWrapper;
