const express = require('express');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { adminRouter } = require('./routes/admin/admin.routes');
const shopRouter = require('./routes/shop/shop.routes');

const server = http.createServer(app);
const get404 = require('./controllers/error.controller');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(get404);

server.listen(PORT, () => {
    console.log('Listening...');
});
