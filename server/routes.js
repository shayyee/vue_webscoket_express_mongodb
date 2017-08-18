/**
 * Created by lenovo on 2017/8/18.
 */
var User = require('./models/user')
module.exports = function (app) {
  app.post('/user/register', function (req, res) {
    // 获取提交数据
    var _user = req.body
    console.log(_user)
    User.findOne({name: _user.name}, function (err, user) {
      if (err) {
        console.log(err)
      }
      if (user) {
        res.json({
          errno: 1,
          data: '用户名已存在'
        })
      } else {
        // var user = new User(_user)
        User.save(function (err, user) {
          if (err) {
            console.log(err)
          }
          res.json({
            errno: 0,
            data: '注册成功'
          })
        })
      }
    })
  })
}