const mongoose = require('mongoose');

module.exports = () => {
    mongoose
        .connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME,
            user: process.env.DB_USER,
            pass: process.env.DB_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Mongodb connected....');
        })
        .catch(err => {
            console.log('Mongodb connection error...');
            // log all db user , password and uri
            console.log(process.env.DB_USER);
            console.log(process.env.DB_PASS);
            console.log(process.env.DB_NAME);
            console.log(err.message)
        });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db...');
    });

    mongoose.connection.on('error', err => {
        console.log(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected...');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(
                'Mongoose connection is disconnected due to app termination...'
            );
            process.exit(0);
        });
    });
};