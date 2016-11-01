const log4js = require('log4js');
log4js.configure({
  appenders: [
    // { type: 'console' },
    { type: 'file', filename: 'logs/cheese.log' }
  ]
});

const logger = log4js.getLogger();

module.exports = logger;