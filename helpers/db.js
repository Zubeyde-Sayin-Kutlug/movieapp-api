const mongoose = require('mongoose');
module.exports = () =>{
  mongoose.connect('mongodb+srv://zubeydesk:safiyesevde2017@cluster1.qtkxt.mongodb.net/movieappdbEurope?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.on('open', function() {
    console.log("We're connected!")
  });

}
