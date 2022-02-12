const Logger = require('./index')

const logger = new Logger('token', 'author', true)

async function testSendLog() {
  const response = await logger.sendLog({ author: 'test author', message: 'test msg', type: 'info', data: { error: 'test error' }, send: true })
  console.log(response)
}
testSendLog()


async function testGetLogs() {
  const response = await logger.getLogs({ author: 'test author', type: 'info' })
  console.log(response.docs)
}
testGetLogs()

logger.sendLog()