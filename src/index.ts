import { default as axios } from "axios"

interface ILogger {
  token: String
  readonly baseURL: String
  author: String
  send: Boolean

}

class Logger implements ILogger {
  token: String
  baseURL: String
  author: String
  send: Boolean

  constructor(token: String, author: String, send: Boolean) {
    this.token = token
    this.baseURL = 'https://logger.procyon.host'
    this.author = author
    this.send = send
  }

  /**
   * Send log message to Procyon service.
   * @param {Object} payload 
   * @param {string} [payload.author=this.author] - Log author, e.g - 'My service'.
   * @param {string} payload.message - Log message, e.g - 'My service warning'.
   * @param {string} payload.type - Log type, e.g - 'Warning'.
   * @param {any} payload.data - Something useful.
   * @param {boolean} [payload.send] - Send log to Procyon service?.
   * @returns 
   */
  async sendLog(payload: { author: string; message: string; type: string; data: any; send: boolean }) {
    payload: string;
    try {
      if (!payload.author) payload.author = this.author
      if (!this.send && payload.send) console.warn('\x1b[33m', 'WARNING: Constructor takes "send: false" but you pass "send: true" in sendLog method. Log will not be sent.', '\x1b[0m')
      if (!this.send || payload.send === false) return console.log('logger - sendLog: ', payload)
      const response = await axios.post(this.baseURL + `/logs/add/${this.token}`, payload)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  /**
   * Get logs from Procyon service
   * @param options 
   * @returns 
   */
  async getLogs(options: any) {
    try {
      const response = await axios.post(this.baseURL + `/logs/get/${this.token}`, options)
      return response.data.logs
    } catch (error) {
      console.error(error)
    }
  }
}

export { Logger }
