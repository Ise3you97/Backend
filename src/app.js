const express = require('express');
const app = express();
const cors = require('cors');
const noteRoute = require('./routes/notes')
const userRoute = require('./routes/users')

 //settings 
 app.set('port', process.env.PORT || 4000);
 
 //middlewares
 app.use(cors());
 app.use(express.json());

 //routes
 app.use('/api/users',userRoute)
 app.use('/api/notes',noteRoute)

module.exports = app;