import React, {useState, useEffect} from 'react';

function AddPost({socket}) {

    const [title, setTitle] = useState("")
    const [categories, setCategories] = useState([])


    useEffect(() => {
        
    }, [])

    

    return (
        <div className='AddPost'>
            <button onClick={() => socket.emit("create-post", {title})}>click me!</button>
            <input 
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ></input>
        </div>
    )
}

export default AddPost;