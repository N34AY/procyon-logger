import { default as axios } from "axios"


import {
  ILogger,
  ISendLogPayload,
  ISendLogResponse,
  IGetLogsOptions,
  IGetLogsResponse
} from "./types";


class Logger implements ILogger {
  token: string;
  readonly baseURL: string;
  author: string;
  send: boolean;

  constructor(token: string, author: string, send: boolean) {
    this.token = token;
    this.baseURL = 'https://logger.procyon.host';
    this.author = author;
    this.send = send;
  };

  async sendLog(payload: ISendLogPayload): Promise<ISendLogResponse> {
    try {
      if (!payload.author) payload.author = this.author
      if (!this.send && payload.send) {
        const message = 'WARNING: Constructor takes "send: false" but you pass "send: true" in sendLog method. Log will not be sent.'
        console.warn('\x1b[33m', message, '\x1b[0m')
        return { success: true, message }
      }
      if (!this.send || payload.send === false) {
        console.log('logger - sendLog: ', payload)
        return { success: true, message: 'DEBUG mode! Message was not sended to Procyon' }
      }

      const url = `${this.baseURL}/logs/add/${this.token}`
      return (await axios.post<ISendLogResponse>(url, payload)).data
    } catch (error: any) {
      console.error(error)
      return { success: false, message: error.stack }
    }
  }

  async getLogs(options?: IGetLogsOptions): Promise<IGetLogsResponse> {
    try {
      const url = `${this.baseURL}/logs/get/${this.token}`
      return (await axios.post<IGetLogsResponse>(url, options)).data
    } catch (error: any) {
      console.error(error)
      return { success: false, message: error.stack }
    }
  }
}

export default Logger
