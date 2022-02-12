import Logger from ".";
import { ISendLogPayload, typeList } from "./types";


const logger = new Logger('fgggf', 'dfd', true)
const payload: ISendLogPayload = { author: 'fdfd', message: 'fdfd', type: typeList.INFO, data: {}, send: false }
logger.sendLog(payload)
