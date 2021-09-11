const Logger = require('./index')

const logger = new Logger('some-key', 'test', false)

logger.sendLog({ author: 'test author', message: 'test msg', type: 'error', data: { error: 'test error' }, send: true })

async function getLogs() {
  const logs = await logger.getLogs({ author: 'test author', type: 'error' })
  console.log(logs)
}

// getLogs()
