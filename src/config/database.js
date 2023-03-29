const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/your_database_name';

const connectDB = async () =
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1);
  }
};

module.exports = connectDB;
