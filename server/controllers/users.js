var User = require('../models/user');
var List = require('../models/list');

module.exports = {
  index: function(req, res){
    User.find({}, function(err, users){
      if (err){
        res.json(err);
      }
      else {
        res.json(users);
      }
    });
  },
  create: function(req, res){
    console.log(req.body);
    User.findOne(req.body, function(err, user){
      if (!user){
        User.create(req.body, function(err, user){
          if(err){
            res.json(err);
          }
          else {
            res.json(user);
            console.log(user);
          }
        });
      } else {
        res.json(user);
      }
    });
  },
  show: function(req, res){
    User.findById(req.params.id, function(err, user){
      console.log('getting user!' + req.params.id);
      if (err){
        res.json(err);
      }
      else {
        res.json(user);
        console.log(user);
      }
    })
  }
}
