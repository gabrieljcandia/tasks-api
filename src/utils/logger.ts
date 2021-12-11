const winston = require('winston');
const {combine, timestamp, printf} = winston.format;

const logFormat = printf(({level, message, timestamp}: {level: string, message: string, timestamp: string}) => {
    return `${timestamp} ${level}: ${message}`;
});


const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        // Save logs with level `error` and below in `error.log`
        new winston.transports.File({filename: 'logs/error.log', level: 'error'}),
        // Save logs with level `info` and below in `info.log`
        new winston.transports.File({filename: 'logs/info.log' }),
    ],
});

module.exports = logger;