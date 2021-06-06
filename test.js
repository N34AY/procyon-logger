const Logger = require('./index')


const logger = new Logger('some-key')

logger.sendLog({ author: 'test author', message: 'test msg', type: 'error', data: { error: 'test error' } })

async function getLogs() {
  const logs = await logger.getLogs({ author: 'test author', type: 'error' })
  console.log(logs)
}

getLogs()
