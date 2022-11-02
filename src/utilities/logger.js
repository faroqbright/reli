import path from 'path';
import bunyan from 'bunyan';
import loggerWrapper from "./loggerWrapper";
 
const level = process.env.NODE_LOGGING_LEVEL || "info";

const log = bunyan.createLogger({
  name: "qetafiLogs",
  streams: [
    {
      level,
      stream: process.stdout
    },
    {
      level,
      path: path.resolve(__dirname, "..", "..", "logs.json")
    }
  ]
});
const logger = new loggerWrapper(log);
export default logger;
