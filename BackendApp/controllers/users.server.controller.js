var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  // 用户的创建
  create: function(req, res, next) {
    console.log(req.body);
    var user = new User(req.body);
    user.save(function(err) {
      if (err) return next(err);

      return res.json(User);
    });
  },

  // 获取列表
  list: function(req, res, next) {
    // 对于这两个参数，还需要思考，如果用户传入负数怎么办
    var pagesize = parseInt(req.query.pagesize, 10) || 10;
    var pagestart = parseInt(req.query.pagestart, 10) || 1;

    User
      .find()
      // 搜索时，跳过的条数
      .skip((pagestart - 1) * pagesize)
      // 获取的结果集条数
      .limit(pagesize)
      .exec(function(err, docs) {
        if (err) return next(err);

        return res.json(docs);
      });
  },

  // 理路由参数
  getByUserId: function(req, res, next, id) {
    if (!id) return next(new Error('User not Found'));

    User
      .findOne({
        _id: id
      })
      .exec(function(err, doc) {
        if (err) return next(err);


        if (!doc) return next(new Error('User not Found'));

        req.User = doc;
        return next();
      });
  },
  // 理路由参数
  userLogin: function(req, res, next) {
    console.log(req.body);
    User
      .findOne({
        userId: req.body.userId,
        password: req.body.password
      })
      .exec(function(err, doc) {
        if (err) return next(err);
console.log(doc);
        if (doc==null) {return res.json({"err":"用户名或密码不正确！"})}

          return res.json(doc);

      });
  }
};
