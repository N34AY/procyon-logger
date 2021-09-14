const { default: axios } = require("axios")

class Logger {
  constructor(token, author, send) {
    this.token = token
    this.baseUrl = 'https://logger.procyon.host'
    this.author = author
    this.send = send
  }

  async sendLog(options) {
    try {
      if (!options.author) options.author = this.author
      if (!this.send && options.send) console.warn('\x1b[33m', 'WARNING: Constructor takes "send: false" but you pass "send: true" in sendLog method. Log will not be sent.', '\x1b[0m')
      if (!this.send || options.send === false) return console.log('logger - sendLog: ', options)
      const response = await axios.post(this.baseUrl + `/logs/add/${this.token}`, options)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async getLogs(options) {
    try {
      if (!options.author) options.author = this.author
      const response = await axios.post(this.baseUrl + `/logs/get/${this.token}`, options)
      return response.data.logs
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Logger
