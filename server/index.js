require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    massive = require('massive');
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const postCtrl = require('./controllers/postController')

const app = express();

app.use(express.json());
app.use(session({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 14},
        secret: SESSION_SECRET
    })
);
app.use(express.static(`${__dirname}/..build`));


//auth endpoints

//app endpoints
app.post('/howdo', postCtrl.newHowDo)
app.get('/howdo/posts', postCtrl.getPosts)
app.get('/howdo/categories', postCtrl.getCategories)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('The db is connected!')
    app.listen(SERVER_PORT, () => console.log(`Server receiving trash deposits on port ${SERVER_PORT}`))
}).catch(error => console.log(error))