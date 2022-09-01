import winston from 'winston';

const loggingTransports = [];

const consoleWinstonTransport = new winston.transports.Console({
  level: process.env.LOG_LEVEL || 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
});

loggingTransports.push(consoleWinstonTransport);

const l: any = winston.createLogger({
  format: winston.format.simple(),
  transports: loggingTransports,
});

l.debug('logging started...');
l.info(`node environment: ${process.env.NODE_ENV || 'development'}`);

export default l;
