const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');   

const users = require('./routes/api/users');
const orgs = require('./routes/api/orgs');

const app = express()
var cors = require('cors')
 
app.use(cors())

app.use(
    express.urlencoded({
        extended: false
    }));

app.use(express.json())

mongoose.connect('mongodb+srv://educator-ai:' + 'vQk52MyZlw0zYUTW' + '@cluster0.hqk1y.mongodb.net/edcuatorDb?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
    console.log('MongoDB successfully connected')
})
.catch(err =>{
    console.log(err)
})

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/orgs', orgs);
app.use('/test', require('./question_route/posts'));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));