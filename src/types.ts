export interface ILogger {
  // Auth token
  token: string;
  author: string;
  send?: boolean;

  sendLog(payload: ISendLogPayload) : Promise<ISendLogResponse>;
  getLogs(options?: IGetLogsOptions) : Promise<IGetLogsResponse>;
};

export enum typeList {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  CRITICAl = "critical"
}

export type logType = typeList.INFO | typeList.WARNING | typeList.ERROR | typeList.CRITICAl

export interface ISendLogPayload {
  author?: string
  message: string
  type: typeList
  data: object
  send: boolean
}

export interface ISendLogResponse {
  success: boolean
  message: string
}

export interface ILog {
  _id: string
  author: string
  message: string
  type: typeList
  data: any
  createdAt: Date
}

export interface IGetLogsOptions {
  author?: string
  type?: typeList
  page?: number
  limit?: number
}

export interface IGetLogsResponse {
  success: boolean
  message: string
  logs?: { 
    docs: ILog[]
    totalDocs: number
    limit: number
    totalPages: number
    page: number
    pagingCounter: number
    hasPrevPage: boolean
    hasNextPage: boolean
    prevPage: number | null
    nextPage: number | null
  }
}

export interface ISendLogResponse {
  success: boolean;
  message: string;
};
