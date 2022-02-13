import Logger from '.';
import { IGetLogsOptions, ISendLogPayload, typeList } from './types';

const logger = new Logger('fgggf', 'dfd', true);
const payload: ISendLogPayload = { author: 'fdfd', message: 'fdfd', type: typeList.INFO, data: {}, send: false };
logger.sendLog(payload);

const options: IGetLogsOptions = {
  author: 'My app',
  type: typeList.ERROR,
  page: 1,
  limit: 100,
};
logger.getLogs(options);
