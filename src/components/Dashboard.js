import React, {useEffect, useState} from "react";
import axios from "axios";

function Dashboard() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('/howdo/posts')
            .then(res => setPosts(res.data))
            .catch(error => console.log(error))
    },[])

    const postsMap = posts.map((post) => <div>{post.user_id} </div>)

    return (
        <div className='dashboard'>
            <div className='categories'>
                <div className='each-category'>

                </div>

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