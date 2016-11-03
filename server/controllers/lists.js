var List = require('../models/list');
var User = require('../models/user');

module.exports = {
  index: function(req, res){
    List.find({})
    .populate('_user')
    .exec( function(err, lists){
      if(err){
        res.json(err);
      }
      else {
        res.json(lists);
      }
    });
  },
  create: function(req, res){
    console.log(req.body);
    List.create(req.body, function(err, newList){
      if (err){
        res.json(err);
      }
      else {
        res.json(newList);
      }
    });
  }
}
