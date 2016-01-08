var mongoose = require('mongoose');

var WorkLogSchema = new mongoose.Schema({
  logDate: Date,//工作日志日期
  contents：[{
    id: Number,//工作编号
    projectid:String，//项目编号
    content:String，//工作内容
    result:String,//工作结果
    theTime:Number,//占用时间
    comment:String,//备注
  }],
  // 设置默认值
  createTime: {type: Date, default: Date.now}
});

var WorkLog = mongoose.model('WorkLog', WorkLogSchema);
