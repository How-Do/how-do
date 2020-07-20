require("dotenv").config();
const express = require("express"),
  session = require("express-session"),
  massive = require("massive");
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
//Controllers
const postCtrl = require("./controllers/postController");
const commentCtrl = require("./controllers/commentController");
const chartCtrl = require("./controllers/chartController");

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
//Auth0Provider

app.get("/authorize", function(req, res) {
  res.send("Secured Resource");
});

//auth endpoints

var request = require("request");

var options = {
  method: "GET",
  url: "https://how-do.us.auth0.com/api/v2/users?search_engine=v3",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InkwMHNFeldXSE85ZGEySHpfWFZOUiJ9.eyJpc3MiOiJodHRwczovL2hvdy1kby51cy5hdXRoMC5jb20vIiwic3ViIjoiV0NlVW1jeDlSNXJpdVcyRzF2R051dWRsV0NwZFdEanlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vaG93LWRvLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTk1MjAwODg3LCJleHAiOjE1OTUyODcyODcsImF6cCI6IldDZVVtY3g5UjVyaXVXMkcxdkdOdXVkbFdDcGRXRGp5Iiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.YHxkoduJdtCE5xgBz0COKT8E5zZygSuQGDayFxw-7_qFJYuYLuKtrvqWv-OIr_Emdm-d9xv7rgIAzQ5PN7vlUReF59tYv3B4UHpDxK9wuD2lRhQzTrrhI-792aMvvTxHdPB_bhHhrGtxKRWvCjN7fPZPYp3cMkgGDtDwkd4YaGFV5Y6mYVZe4xQ_dBKGZH3fIqlc2EB-h7kZgHNY5RlZi9jhUERNCeWmZCDlTH0fqANgh_48Z5-AKaqh-S1wTySMnvwcG9pFIws6Gz1x-820nKJmSZYrpeLqLM5SxrI-QwLMBWCr-yVCQsK7pqmasidZYCZPcuoqSvrFsYQFY6prdg"
  }
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

//app endpoints
app.post("/howdo", postCtrl.newHowDo);
app.get("/howdo/posts", postCtrl.getPosts);
app.get("/howdo/post/:id", postCtrl.getPost);
app.get("/howdo/categories", postCtrl.getCategories);
app.get("/howdo/comments/:id", commentCtrl.getComments);
app.post("/howdo/comment", commentCtrl.newComment);

//chart endpoints
app.get("/howdo/chartpost/:id", chartCtrl.getPostsCount);
app.get("/howdo/chartcomment/:id", chartCtrl.getCommentsCount);
app.get("/howdo/chartdata/:id", chartCtrl.getPostCommentDataPerUser);


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
