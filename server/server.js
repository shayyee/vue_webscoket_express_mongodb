/**
 * Created by lenovo on 2017/8/18.
 * 用于打包后的服务器端
 */

var express = require('express')
var config = require('../config/index')
var port = process.env.PORT || config.dev.port
var mongoose = require('mongoose')
// 日志文件
var morgan = require('morgan')
// session存储
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('cookie-session')

var app = express()
var router = express.Router()

// 用于异步回调
mongoose.Promise = require('bluebird')
global.db = mongoose.connect('mongodb://localhost:27017/vuechat')

// 服务器提交的数据json化
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// sesstion 存储
app.use(cookieParser())
app.use(session({
  secret: 'vuechat',
  resave: false,
  saveUninitialized: true
}))

// 用于静态展示入口，所有请求都走./index.html
router.get('/', function (req, res, next) {
  req.url = './index.html'
  next()
})
app.use(router)

// var env = process.env.NODE_ENV || 'development'
if (app.get('env') === 'development') {
  app.set('showStackError', true)
  app.use(morgan(':method :url :status'))
  app.locals.pretty = true
  mongoose.set('debug', true)
}

app.listen(port, function () {
  console.log('Server running in port ' + port)
})

require('./routes')(app)
// 声明静态资源地址
app.use(express.static('./dist'))
