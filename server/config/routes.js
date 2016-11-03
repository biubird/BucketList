var User = require('../controllers/users')
var List = require('../controllers/lists')

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.post('/users', User.create);
  app.get('/users', User.index);
  app.post('/lists', List.create);
  app.get('/lists', List.index);
  // app.put('/lists', List.update);
  app.get('/users/:id', User.show);

}
