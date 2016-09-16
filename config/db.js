var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/user-auth';

if (process.env.NODE_ENV === 'production') {
    connectionString = "mongodb://heroku_192mjtbt:b395togiicmvr0sbfeqqb6k387@ds033086.mlab.com:33086/heroku_192mjtbt";
    console.log(connectionString);
}
mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Securing');
  console.log(connectionString);
});


mongoose.connection.on('error', function(err) {
  console.log('Oh shit, gotta get outta here. There\'s something wrong here...');
  console.log(connectionString);
  console.log(err);
});

mongoose.connection.on('disconnected', function() {
  console.log('We\'re out of here! Into the Choppa!');
});
