const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();


//import routs
const postRoute = require('./routes/routePosts');
const nonpostRoute = require('./routes/nonroutePosts ');

//app middleware
app.use(bodyParser.json());


app.use(
    cors({
      origin: ["https://eloquent-allen-0ee670.netlify.app"], //it acsess frontend port 3000
      credentials: true, //it acsess tokens
    })
  );
//route middleware
app.use(postRoute);
app.use(nonpostRoute);

const PORT = 8000;

const dbUrl = 'mongodb+srv://crud_01:newcrud@mernapp.3cvvu.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(dbUrl)
.then(()=>{
    console.log("DataBase Connected");
})
.catch((err) =>console.log("Database connection error",err));

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${PORT}`)
})