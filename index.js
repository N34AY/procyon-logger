const { default: axios } = require("axios")

class Logger {
  constructor(token, author) {
    this.token = token
    this.baseUrl = 'http://localhost:3014'
    this.author = author
  }

  async sendLog(options) {
    if (!options.author) options.author = this.author
    const response = await axios.post(this.baseUrl + `/logs/add/${this.token}`, options)
    return response.data
  }

  async getLogs(options) {
    if (!options.author) options.author = this.author
    const response = await axios.post(this.baseUrl + `/logs/get/${this.token}`, options)
    return response.data
  }

}

module.exports = Logger
