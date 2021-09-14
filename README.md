# Procyon Logger 
## This is npm module for quick integration with Procyon logger service. More info here - [Procyon](https://github.com/N34AY/procyon-logger-package)
### Quick start
```
const Logger = require('./index')

const logger = new Logger('f7d6ea6c-878c-4f2d-942c-c381e4ac704a', 'test', true)

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

```