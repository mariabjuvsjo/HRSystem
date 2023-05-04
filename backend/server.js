const app = require('./app.js');
const connectDB = require('./db/db');

const PORT = 8000;


async function starter() {
    await connectDB();
    app.listen(PORT, () => {
        console.log('Listening on port: ' + PORT);
    });
}

starter();
