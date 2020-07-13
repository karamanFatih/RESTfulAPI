const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://dbUser:dbPassword@cluster0-6ehlt.mongodb.net/?ssl=true&authSource=admin',{useMongoClient: true});
    mongoose.connection.on('open',() => {
    console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error',(err) => {
        console.log('MongoDB: Error',err);
    });

};