var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userId:String,//用户编号
  nickName:String,//呢称
  password:String,//密码
  project:[{
    projectid:String,//项目编号
    TakeTime:Date,//加入时间
    exitTime:Date,//退出时间
    role:Number,//在项目中的角色，0为普通员工，1为项目经理，可查看项目其他成员的工作日志
    comment:String,//备注
  }],
  // 设置默认值
  createTime: {type: Date, default: Date.now}
});

var User = mongoose.model('User', UserSchema);
