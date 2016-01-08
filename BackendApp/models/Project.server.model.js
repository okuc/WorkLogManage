var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  projectName: String,//项目名称
  projectId: String,//项目编号
  startDate: Date,//项目开始日期
  endDate: Date,//项目结束日期
  createPerson: String,//创建人
  // 设置默认值
  createTime: {type: Date, default: Date.now}
});

var Project = mongoose.model('Project', ProjectSchema);
