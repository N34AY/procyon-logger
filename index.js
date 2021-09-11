const { default: axios } = require("axios")

class Logger {
  constructor(token, author, send) {
    this.token = token
    this.baseUrl = 'http://localhost:3014'
    this.author = author
    this.send = send
  }

  async sendLog(options) {
    if (!options.author) options.author = this.author
    if (send) {
      const response = await axios.post(this.baseUrl + `/logs/add/${this.token}`, options)
      return response.data
    } else console.log('logger - sendLog: ', options)
  }

  async getLogs(options) {
    if (!options.author) options.author = this.author
    const response = await axios.post(this.baseUrl + `/logs/get/${this.token}`, options)
    return response.data
  }

}

module.exports = Logger
