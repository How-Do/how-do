require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    massive = require('massive');
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;

//Controllers
const postCtrl = require('./controllers/postController');
const commentCtrl = require('./controllers/commentController');

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
app.get('/howdo/post/:id', postCtrl.getPost)
app.get('/howdo/categories', postCtrl.getCategories)
app.get('/howdo/comments/:id', commentCtrl.getComments)
app.post('/howdo/comment', commentCtrl.newComment)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('The db is connected!')
    // app.listen(SERVER_PORT, () => console.log(`Server receiving trash deposits on port ${SERVER_PORT}`))
    const io = require("socket.io")(
        app.listen(SERVER_PORT, () =>
          console.log(`Server listening on ${SERVER_PORT}`)
        )
      )
      app.set('io', io)
      io.on("connection", (socket) => {
          socket.join("comments-section")
          console.log("userconnected", socket.id)
        socket.on("disconnect", () => {
            //for a chat app "User has left the room"
            console.log("userdisconnected", socket.id)
        })
        socket.on("create-post", (body) => {
            db.add_how_do(body.userId, body.title, body.description, body.imageUrl, body.category)
            .then((results) => io.in("comments-section").emit("sent-post", results))
            .catch((err) => console.log(err))
        })
        socket.on("create-comment", (body) => {
            console.log("create-comment")
            db.add_comment(body.userId, body.postId, body.comment, body.commentPic)
            .then((results) => io.in("comments-section").emit("sent-comment", results))
            .catch((err) => console.log(err))
        })
      })
}).catch(error => console.log(error))