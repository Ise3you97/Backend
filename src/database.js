const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;
//const URI ='mongodb://localhost/database';
console.log(process.env.MONGODB_URI)

mongoose.connect(URI,{
    useNewUrlParser: true,
});
const conecction = mongoose.connection;

conecction.once('open', () => {
    console.log("DB is connected", URI);
});