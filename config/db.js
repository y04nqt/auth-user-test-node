var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/user-auth';
if (process.env.NODE_ENV === 'production') {
    connectionString = process.env.MONGOLAB_URI;
}
mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Securing');
});


mongoose.connection.on('error', function(err) {
  console.log('Oh shit, gotta get outta here. There\'s something wrong here...');
  console.log(err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Get to the choppa');
});
