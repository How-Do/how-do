import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from './Post';
import {Link} from 'react-router-dom'
import hobbies from '../images/hobbies.png';
import homeimp from '../images/homeimprovement.png';
import outdoors from '../images/outdoors.png';
import food from '../images/Food&Drink.png';
import lifehacks from '../images/lifehacks.png';

function Dashboard() {

    const [posts, setPosts] = useState([])
    // const [categories, setCategories] = useState([])


    useEffect(() => {
        axios.get('/howdo/posts')
            .then(res => setPosts(res.data))
            .catch(error => console.log(error))
    }, [])

    //map of all posts


    const postsMap = posts.map((post) => 
    <Link className='postLink' to={`/post/${post.id}`}>
        <div>
            {post.title}
            <div>
                {post.description}
                {post.comment ? <div>
                    Answered!
                </div> : <div> Looking for guidance.... </div>}
            </div>
            <div className='user-info'>
                {post.full_name}
            </div>
        </div>
    </Link>)

    return (
        <div className='dashboard'>
            <div className='categories'>
                <div className='each-category'>
                    <a>
                        <img
                            src={hobbies}
                            className='hobbies'
                            alt='hobby-category-pic'
                            />
                    </a>
                    <a>
                        <img
                            src={outdoors}
                            className='outdoors'
                            alt='outdoor-category-pic'
                        />
                    </a>
                    <a>
                        <img
                            src={homeimp}
                            className='homeimp'
                            alt='homeimprovement-category-pic'
                        />
                    </a>
                    <a>
                        <img
                            src={food}
                            className='food'
                            alt='food&drink-category-pic'
                        />
                    </a>
                    <a>
                        <img
                            src={lifehacks}
                            className='likehacks'
                            alt='lifehacks-category-pic'
                        />
                    </a>
                </div>

            </div>
            <div className='about'>
                <p>Welcome to howDo – the website where you ask how to do stuff, and we tell you how it’s done.
                    <br/>
                    Browse user advice by entering a topic in the search field above. If you want to post your own
                    questions, you’ll need to log in. That’s just how we do it ‘round here.
                    <br/>
                    Got a better solution? Comment on how you would do it. See if the community votes your answer
                    up. Just keep it clean – rudeness and crudeness are not how it’s done.
                    <br/>
                    Jump in, howDoer. You want to do something new. So DO it!
                </p>
            </div>
            <div className='posts'>
                <div className='posts-category-title'>
                </div>
                {postsMap}
            </div>
        </div>
    )
}

export default Dashboard;