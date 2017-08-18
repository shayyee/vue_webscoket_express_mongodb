/**
 * Created by lenovo on 2017/8/18.
 */
var mongoose = require('mongoose')
var UserSchema = require('../schemas/user')
var User = mongoose.model('User', UserSchema)

module.exports = User
