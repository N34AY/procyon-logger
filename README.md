# Procyon Logger 
## This is npm module for quick integration with Procyon logger service. More info here - [Procyon](http://github.com)
### Quick start
```
const Logger = require('procyon-logger')

const logger = new Logger('access-token')

const data = {
  author: 'test author',
  message: 'test msg',
  type: 'error',
  data: { error: 'test error' }
}
logger.sendLog({ data })

```