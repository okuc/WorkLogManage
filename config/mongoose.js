var mongoose = require('mongoose');
var config = require('./config');

module.exports = function(){
  var db = mongoose.connect(config.mongodb);

    // 导入 model
    require('../BackendApp/models/user.server.model');
      // 导入 model
    require('../BackendApp/models/project.server.model');
        // 导入 model
    require('../BackendApp/models/worklog.server.model');

  return db;
};
