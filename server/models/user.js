var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, unique: true},
  createdAt: {type: Date, default: Date.now()},
  _list: [{type: Schema.Types.ObjectId, ref: 'List'}]
});

module.exports = mongoose.model('User', UserSchema);
