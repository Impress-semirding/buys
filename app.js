var express = require('express');
var https = require('https');
var fs = require('fs');
// var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var indiana = require('./routes/indiana');
const login = require('./routes/login');
var port = process.env.PORT || 8888;
const numCPUs = require('os').cpus().length;
const cluster = require('cluster');
const options = {
  key: fs.readFileSync('./config/www.zhizi.xyz/2_www.zhizi.xyz.key', 'utf8'),
  cert: fs.readFileSync('./config/www.zhizi.xyz/1_www.zhizi.xyz_cert.crt', 'utf8')
};

if (cluster.isMaster) {

  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

} else if(cluster.isWorker) {

  var app = express();
  var session = require('express-session');
  var RedisStore = require('connect-redis')(session);


  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    // res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

  app.use(logger('dev'));
  app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  const redisOptions = {
       "host": "127.0.0.1",
       "port": "6379",
       "ttl": 60 * 60 * 24 * 30,   //Session的有效期为30天
  };

  // 此时req对象还没有session这个属性
  app.use(session({
       store: new RedisStore(redisOptions),
       secret: 'express is powerful'
  }));
  // 经过中间件处理后，可以通过req.session访问session object。比如如果你在session中保存了session.userId就可以根据userId查找用户的信息了。

  app.use(express.static(path.join(__dirname, 'public')));


  app.use('/', routes);
  app.use('/login', login);
  app.use('/indiana', indiana);


  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
  app.listen('8777');
  const server = https.createServer(options, app);
  server.listen(port);
}

module.exports = app;
