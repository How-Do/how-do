import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import hobbies from "../images/hobbies.png";
import homeimp from "../images/homeimprovement.png";
import outdoors from "../images/outdoors.png";
import food from "../images/Food&Drink.png";
import lifehacks from "../images/lifehacks.png";
import {useAuth0} from "@auth0/auth0-react";

function Dashboard(props) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const {isAuthenticated} = useAuth0();
  // const [categories, setCategories] = useState([])

  useEffect(() => {
    props.socket.on("sent-post", body => {
      // alert(body.content)
      console.log(body);
      setPosts(body);
    });
  }, []);

  useEffect(() => {
    axios
      .get("/howdo/posts")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  }, []);

  let categorySelector = e =>
    setFilteredPosts(posts.filter(ele => ele.category === e));

  //map of all posts - if a filter has been applied it will only show the posts the match the filter, otherwise it will show all posts.
  const postsMap = filteredPosts[0]
    ? filteredPosts.map(post => (
        <Link className="postLink" to={`/post/${post.post_id}`}>
          <div className="post-container">
            {post.title}
            <div>
              {post.description}
              {post.comment ? (
                <div>Answered!</div>
              ) : (
                <div> Looking for guidance.... </div>
              )}
            </div>
            <div className="user-info">{post.full_name}</div>
          </div>
        </Link>
      ))
    : posts.map((post, i) => (
        <Link className="postLink" to={`/post/${post.post_id}`}>
          <div className="post-container">
            {post.title}
            <div>
              {post.description}
              {post.comment ? (
                <div>Answered!</div>
              ) : (
                <div> Looking for guidance.... </div>
              )}
            </div>
            <div className="user-info">{post.full_name}</div>
          </div>
        </Link>
      ));

  console.log(postsMap, "map of the POSTS");
  return (
    <div className="dashboard">
      <div className="categories">
        <div className="each-category">
          <a onClick={e => categorySelector("hobbies")} name="hobbies">
            <img src={hobbies} className="hobbies" alt="hobby-category-pic" />
          </a>
          <a onClick={e => categorySelector("outdoors")} name="outdoors">
            <img
              src={outdoors}
              className="outdoors"
              alt="outdoor-category-pic"
            />
          </a>
          <a
            onClick={e => categorySelector("home_improvement")}
            name="home_improvement"
          >
            <img
              src={homeimp}
              className="homeimp"
              alt="homeimprovement-category-pic"
            />
          </a>
          <a
            onClick={e => categorySelector("food_and_drink")}
            name="food_and_drink"
          >
            <img src={food} className="food" alt="food&drink-category-pic" />
          </a>
          <a onClick={e => categorySelector("life_hacks")} name="life_hacks">
            <img
              src={lifehacks}
              className="likehacks"
              alt="lifehacks-category-pic"
            />
          </a>
        </div>
      </div>
      <div className="column-2">
        {!isAuthenticated ? (
          <div className="about">
            <p>
              Welcome to <span className="title">howDo</span> – the site where
              you ask how to do stuff, and we tell you how it’s done.
            </p>
            <p>
              Browse user advice by entering a topic in the search field above -
              or narrow your search by clicking on a category to the left. If
              you want to post your own questions, you’ll need to log in. That’s
              just how we do it ‘round here.
            </p>
            <p>
              Got a better solution? Login and comment on how <i>you</i> would
              do it. See if the community votes your answer up. Just keep it
              clean – rudeness and crudeness are not how it’s done.
            </p>
            <p>Jump in, howDoer. You want to do something new. So DO it!</p>
          </div>
        ) : null}
        <div className="posts">{postsMap}</div>
      </div>
    </div>
  );
}

export default Dashboard;
