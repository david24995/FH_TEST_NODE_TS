import winston, { format } from 'winston';

const { combine, timestamp, json } = format;

export const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), json()),
  // defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export function buildLogger(service: string) {
  return {
    log: (message: string) => {
      logger.log({ level: 'info', message, service });
    },
    error: (message: string) => {
      logger.error({ message, service });
    },
  };
}
