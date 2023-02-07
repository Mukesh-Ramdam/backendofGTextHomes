const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();
const cors = require('cors');

const contactRouter = require('./routes/contactRoute');


// middlewares
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json())

// for parsing application/json
app.use(bodyParser.json())

require('./connections/mongodb-con');

//Routes
app.use('/api/contact/', contactRouter)


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`App running on port: ${port}`);
    // console.log("apikey is",API_KEY)
})