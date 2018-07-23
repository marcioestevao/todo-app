const server = require('./config/server')

require('./config/database.mongo')
require('./config/routes')(server)