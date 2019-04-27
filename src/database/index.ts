/*import mongoose from "mongoose";
mongoose.Promise = Promise;

const options = {
};

mongoose.connect('process.env.MONGO_URL' , options);


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection with database failed'));
db.once('open', () => {
    console.log('Connection with database succeeded')
});

exports.Database = db;*/
