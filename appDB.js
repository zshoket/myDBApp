const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');

require('dotenv/config')

app.use(bodyParser.json());

//Middlewares (Functions)
// app.use('/posts', () => {
//  console.log('This is a middleware running');
// });

//import routes
const postsRoute = require ('./routes/posts');

app.use('/posts', postsRoute);

// app.get('/', (req, res)=> {
//     res.send('We are on Home');
//    });


//connect to db
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() =>
console.log('connected to DB!')
)

//listen to server at port
app.listen(3002);