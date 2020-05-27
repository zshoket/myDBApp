const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
var cors = require('cors')

app.use('/uploads', express.static('uploads'));


require('dotenv/config')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

//import routes
const postsRoute = require ('./routes/posts');

app.use('', postsRoute);
app.use(cors());


// app.get('/', (req, res)=> {
//     res.send('We are on Home');
//    });


//connect to db
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true},
() =>
console.log('connected to DB!')
);
mongoose.Promise = global.Promise;

//listen to server at port
app.listen(3002);