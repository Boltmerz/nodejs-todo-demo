var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://<user>:<password>@ds042459.mlab.com:42459/ddb-to-do', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
        if(err) {
            console.log('Some problem with the connection ' +err);
        } else {
            console.log('The Mongoose connection is ready');
        }
    })

mongoose.Promise = Promise;
module.exports.Todo = require('./todo');