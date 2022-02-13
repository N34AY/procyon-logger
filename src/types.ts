/**
 * An interface describing a Logger class.
 * Used for sending and receiving logs from Procyon logging service.
 *
 * @example
 * ```
 * import Logger from "procyon-logger"
 *
 * const logger = new Logger('token123456', 'My app', true)
 * ```
 */
export interface ILogger {
  /**
   * Procyon service token.
   * @see {@link https://logger.procyon.host|RFC 1738}
   */
  token: string;
  /**
   * Name of logs author.
   * Can be different for each log.
   * @see {@link ISendLogPayload}
   */
  author: string;
  /**
   * Determines whether the message will be sent to the server.
   * Can be different for each log.
   * @see {@link ISendLogPayload}
   */
  send?: boolean;

  /**
   * Send log to Procyon logging service.
   * @param payload - log data.
   * @see {@link ISendLogPayload}
   *
   * @example
   * ```ts
   * const payload: ISendLogPayload = {
   *  author: 'My app',
   *  message: 'App is started',
   *  type: typeList.INFO,
   *  data: { status: 'OK' },
   *  send: false
   * }
   * logger.sendLog(payload)
   * ```
   *
   * @returns response from Procyon service.
   * @see {@link ISendLogResponse}
   */
  sendLog(payload: ISendLogPayload): Promise<ISendLogResponse>;

  /**
   * Get logs from Procyon service
   * @param options - determines which logs to getю
   * @see {@link IGetLogsOptions}
   *
   * @example
   * ```ts
   * const options: IGetLogsOptions = {
   *  author: 'My app',
   *  type: typeList.ERROR,
   *  page: 1,
   *  limit: 100
   * }
   * logger.getLogs(options)
   * ```
   *
   * @returns response from Procyon service
   * @see {@link IGetLogsResponse}
   */
  getLogs(options?: IGetLogsOptions): Promise<IGetLogsResponse>;
}

export enum typeList {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  CRITICAl = 'critical',
}

export type logType = typeList.INFO | typeList.WARNING | typeList.ERROR | typeList.CRITICAl;

export interface ISendLogPayload {
  /**
   * Name of log author.
   */
  author?: string;
  /**
   * Describes what about this log.
   */
  message: string;
  /**
   * Determines the log type.
   * @remarks
   * See {@link typeList | the typeList enum} for more details.
   */
  type: typeList;
  /**
   * Any usefull data, e.g - error trace
   */
  data: object;
  /**
   * Determines whether the message will be sent to the server.
   */
  send: boolean;
}

export interface ISendLogResponse {
  success: boolean;
  message: string;
}

export interface ILog {
  _id: string;
  author: string;
  message: string;
  type: typeList;
  data: any;
  createdAt: Date;
}

export interface IGetLogsOptions {
  author?: string;
  type?: typeList;
  page?: number;
  limit?: number;
}

export interface IGetLogsResponse {
  success: boolean;
  message: string;
  logs?: {
    docs: ILog[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  };
}

export interface ISendLogResponse {
  success: boolean;
  message: string;
}
