const mongoose = require('mongoose');
const uri = 'mongodb+srv://xdantexxx:t6v5wdluFD6tp3rC@cluster0.fkek7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(process.env.MONGODB_URI || uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
