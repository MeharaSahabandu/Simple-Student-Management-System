const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express();
const dotenv = require ('dotenv');
require ('dotenv').config();


// DB Config
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const url = process.env.MONGODB_URL;

mongoose.connect(url, ()=>{
    useCreateIndex: true;
    useNewUrlParser: true;
    useUnifiedTopology: true;
    useFindAndModify: false;
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});



// Import Routes