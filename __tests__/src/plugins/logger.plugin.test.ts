import { logger } from '../../../src/plugins/logger.plugin';
import { buildLogger } from '../../../src/plugins';

describe('plugins/logger.plugin.ts', () => {
  it('buildLogger should return a function logger', () => {
    const log = buildLogger('test');

    expect(typeof log.log).toBe('function');
    expect(typeof log.error).toBe('function');
  });

  it('logger.log should log message', () => {
    const winstonSpy = jest.spyOn(logger, 'log');
    const message = 'test message';
    const service = 'test service';

    const winstonLogger = buildLogger(service);

    winstonLogger.log(message);

    expect(winstonSpy).toHaveBeenCalled();
    expect(winstonSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'info',
        message,
        service,
      })
    );
  });

  it('logger.error should error message', () => {
    const winstonSpy = jest.spyOn(logger, 'error');
    const message = 'error message';
    const service = 'error service';

    const winstonLogger = buildLogger(service);

    winstonLogger.error(message);

    expect(winstonSpy).toHaveBeenCalled();
    expect(winstonSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'error',
        message,
        service,
      })
    );
  });
});
