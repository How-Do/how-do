require("dotenv").config();
const express = require("express"),
  session = require("express-session"),
  massive = require("massive");
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
//Controllers
const authCtrl = require("./controllers/authController");
const postCtrl = require("./controllers/postController");
const commentCtrl = require("./controllers/commentController");
const chartCtrl = require("./controllers/chartController");
const voteCtrl = require("./controllers/voteController");
const app = express();

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 14},
    secret: SESSION_SECRET
  })
);
app.use(express.static(`${__dirname}/..build`));

// Log out the request path (Code from JR to see endpoint calls in terminal)
// app.use((req, res, next) => {
//   console.log('\x1b[36m%s\x1b[0m', `\n${req.method} ${req.path}`)
//   next()
// })

//auth endpoints
app.post("/api/register", authCtrl.register);
app.post("/api/login", authCtrl.login);
app.delete("/api/logout", authCtrl.logout);
app.get("/api/setUser", authCtrl.setUser);

//app endpoints
app.post("/howdo", postCtrl.newHowDo);
app.get("/howdo/posts", postCtrl.getPosts);
app.get("/howdo/post/:id", postCtrl.getPost);
app.get("/howdo/categories", postCtrl.getCategories);
app.get("/howdo/comments/:id", commentCtrl.getComments);
app.post("/howdo/comment", commentCtrl.newComment);
app.get("/howdo/commentcount/:post_id", commentCtrl.getCommentCount)

//chart endpoints
app.get("/howdo/chartpost/:id", chartCtrl.getPostsCount);
app.get("/howdo/chartcomment/:id", chartCtrl.getCommentsCount);
app.get("/howdo/chartdata/:id", chartCtrl.getPostCommentDataPerUser);

//vote endpoints
app.post("/howdo/upvote/:comment_id", voteCtrl.upvoteComment);
app.post("/howdo/downvote/:comment_id", voteCtrl.downvoteComment);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
})
  .then(db => {
    app.set("db", db);
    console.log("The db is connected!");
    // app.listen(SERVER_PORT, () => console.log(`Server receiving trash deposits on port ${SERVER_PORT}`))
    const io = require("socket.io")(
      app.listen(SERVER_PORT, () =>
        console.log(`Server listening on ${SERVER_PORT}`)
      )
    );
    app.set("io", io);
    io.on("connection", socket => {
      socket.join("comments-section");
      console.log("userconnected", socket.id);
      socket.on("disconnect", () => {
        //for a chat app "User has left the room"
        console.log("userdisconnected", socket.id);
      });
      socket.on("create-post", body => {
        db.add_how_do(
          body.userId,
          body.title,
          body.description,
          body.imageUrl,
          body.category
        )
          .then(results => io.in("comments-section").emit("sent-post", results))
          .catch(err => console.log(err));
      });
      socket.on("create-comment", body => {
        console.log("create-comment");
        db.add_comment(body.userId, body.postId, body.comment, body.commentPic)
          .then(results =>
            io.in("comments-section").emit("sent-comment", results)
          )
          .catch(err => console.log(err));
      });
    });
  })
  .catch(error => console.log(error));
