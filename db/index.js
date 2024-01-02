
const mongoose = require('mongoose');

const uri = 'mongodb://saddam:saddamsc@mongo:27017/cinema?authSource=admin';
//const connectionString = 'mongodb://localhost:27017/cinema';

//mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  //console.error('Connection error', e.message);
//});

//const db = mongoose.connection;

//module.exports = db;
const connectDB = async () => {
    try {
        await mongoose.connect(uri ,
        {useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;

