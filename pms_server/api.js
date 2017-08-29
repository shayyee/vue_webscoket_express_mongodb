/**
 * Created by lenovo on 2017/8/25.
 */
const express = require('express')
const appRoutes = express.Router()
appRoutes.get('/getDateList', function (req, res) {
  let data = req.query.date
  let i = 30
  let j = 0
  let dateList = []
  while (i > 0) {
    dateList.push({
      date: addDate(data, j),
      week: new Date(addDate(data, j)).getDay(),
      surplus: Math.round((Math.random() * (10 - 1) + 1))
    })
    j++
    i--
  }
    // console.log(dateList)
  res.json({
    code: 200,
    data: dateList
  })
})
appRoutes.get('/getRoomList', function (req, res) {
  let hotel = req.query.hotel_id
  console.log(hotel)
  res.json({
    code: 200,
    data: [
      {
        name: '单人间',
        room: [{
          id: 1,
          name: '101'
        }, {
          id: 2,
          name: '102'
        }]
      },
      {
        name: '标准间',
        room: [{
          id: 3,
          name: '103'
        }, {
          id: 4,
          name: '104'
        }]
      },
      {
        name: 'VIP',
        room: [{
          id: 5,
          name: '203'
        }, {
          id: 6,
          name: '204'
        }]
      }
    ]
  })
})
function addDate (fdate, days) {
  var date = new Date(fdate)
  date.setDate(date.getDate() + days)
  var m = '00' + (date.getMonth() + 1)
  var mon = (m.length === 3) ? m.substr(1, 2) : m.substr(2, 2)
  var d = '00' + date.getDate()
  var day = (d.length === 3) ? d.substr(1, 2) : d.substr(2, 2)
  return date.getFullYear() + '-' + mon + '-' + day
}
module.exports = appRoutes
