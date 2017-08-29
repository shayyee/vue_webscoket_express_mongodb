/**
 * Created by lenovo on 2017/8/25.
 */
const express = require('express')
const appRoutes = express.Router()

appRoutes.get('/getRoomInfo', function (req, res) {
  res.json({
    code: 200,
    data: {
      acreage: 80,
      contain: 50,
      charge_mode: 2,
      price: 10,
      unit: 60,
      img: ['../static/timg.jpg', '../static/cd.png', '../static/timg.jpg', '../static/cd.png']
    }
  })
})
appRoutes.get('/getBookingDays', function (req, res) {
  res.json({
    status: 'success',
    msg: 'ok',
    data: 7,
    code: 200,
    referrer: ''
  })
})
appRoutes.get('/getPlaceTimes', function (req, res) {
  res.json({
    status: 'success',
    msg: 'ok',
    data: {
      time_start: '17:00',
      time_end: '20:00',
      unit: 60
    },
    code: 200,
    referrer: ''
  })
})
var data = require('./data.json')
appRoutes.get('/getRooms', function (req, res) {
  res.json({
    status: 'success',
    msg: 'ok',
    data: data,
    code: 200,
    referrer: ''
  })
})

module.exports = appRoutes
