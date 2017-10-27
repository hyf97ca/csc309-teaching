// Setup
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware to be able to read POST data
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// SERVER_PORT is defined in '.env'
const port = process.env.SERVER_PORT;

// Routing
const userRouter = express.Router();
const searchRouter = express.Router();

// Add user routes prefixed with '/api/user'
userRouter.use('/api/user', require('./routes/user/register'));
userRouter.use('/api/user', require('./routes/user/login.js'));
userRouter.use('/api/user', require('./routes/user/logout.js'));

// Add search routes prefixed with '/api/search'
searchRouter.use('/api/search', require('./routes/search/food.js'));

// Make the app use our two routers without any prefixes
app.use('', userRouter);
app.use('', searchRouter);

// Start the server
app.listen(port);
console.log('Server started on port', port);
