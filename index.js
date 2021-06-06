const { default: axios } = require("axios")

class Logger {
  constructor(token) {
    this.token = token
    this.baseUrl = 'http://localhost:3014'
  }

  async sendLog(options) {
    const response = await axios.post(this.baseUrl + `/logs/add/${this.token}`, options)
    return response.data
  }

  async getLogs(options) {
    const response = await axios.post(this.baseUrl + `/logs/get/${this.token}`, options)
    return response.data
  }

}

module.exports = Logger
