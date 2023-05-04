require('dotenv').config();
const mongoose = require("mongoose");

/**
 * function for connectiong to database on mongodb atlas with mongoose
 */
/* eslint-disable */
const connectDB = async () => {
    let dsn = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.feu5g7s.mongodb.net/?retryWrites=true&w=majority`

    try {
        const conn = await mongoose.connect(dsn, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        //exit process on failure with 1 if something goes wrong
        process.exit(1);
    }
};

/**
 *
 * @returns disconnect to databse
 */
function close() {
    return mongoose.disconnect();
}

/* eslint-enable */
module.exports = connectDB;