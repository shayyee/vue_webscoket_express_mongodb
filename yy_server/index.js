/**
 * Created by lenovo on 2017/8/25.
 * node index.js--场地预约模拟数据接口
 */
// 引入文件模块
const fs = require('fs')
// 引入处理路径的模块
const path = require('path')
// 引入处理post数据的模块
const bodyParser = require('body-parser')
// 引入Express
const express = require('express')
const app = express()
const appRoutes = require('./api')
// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extension: false }))
app.use('/api', appRoutes)
app.get('*', function (request, response) {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
  response.send(html)
})
// 监听8088端口
app.listen(8088)
console.log('success listen port 8088…………')
