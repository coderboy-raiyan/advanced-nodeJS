const http = require('http');
const colors = require('colors');
const app = require('./src/app/app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

colors.enable();

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Listening on port...');
});
