/**
 * Created by lenovo on 2017/8/18.
 */
var mongoose = require('mongoose')
// MD5加密
var bcrypt = require('bcryptjs')
// 加盐数
var SALT_WORK_FACTOR = 10
var UserSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  password: String,
  src: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})
// 对密码进行加密
UserSchema.pre('save', function (next) {
  var user = this
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})
// 校验密码是否正确
UserSchema.methods = {
  comparePassword: function (_password, callback) {
    bcrypt.compare(_password, this.password, function (err, res) {
      if (err) return callback(err)
      callback(null, res)
    })
  }
}

UserSchema.statics = {
  fetch: function (callback) {
    return this.find({}).sort('meta.updateAt').exec(callback)
  },
  findById: function (id, callback) {
    return this.findOne({_id: id}).exec(callback)
  }
}

module.exports = UserSchema
