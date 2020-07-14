import React, {useEffect, useState} from "react";
import axios from "axios";
import AddPost from "./AddPost";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

function Dashboard() {

    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])


    useEffect(() => {
        axios.get('/howdo/posts')
            .then(res => setPosts(res.data))
            .catch(error => console.log(error))
    }, [])

    // useEffect(() => {
    //     axios.get('/howdo/categories')
    //         .then(res => setCategories(res.data))
    //         .catch(error => console.log(error))
    // }, [])
    //
    // const categoryMap = categories.map((category) => <div>
    //     {category}
    //     {category === 'home_improvement'}
    // </div> )

    //map of all posts

    //SOCKETS: every time we do a .on it will be an arrow function
    useEffect(() => {
        socket.on("sent-post", (body) => {
            // alert(body.content)
            console.log(body)
            setPosts(body)
        })
    },[])

    const postsMap = posts.map((post) => <div>

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
    </div>)

    return (
        <div className='dashboard'>
            <div className='categories'>
                <div className='each-category'>
                    {/*{categoryMap}*/}
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
                {/* <button onClick={() => socket.emit("message", {content: "Message we sent to server"})}>click me!</button> */}

                </div>
                {postsMap}
            </div>
            <AddPost socket={socket}/>
        </div>
    )
}

export default Dashboard;