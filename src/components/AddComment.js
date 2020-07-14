import React, {useState, useEffect} from 'react';

function AddComment({socket}) {

    const [comment, setComment] = useState([])
    const [userId, setUserId] = useState(1) //<-- This needs to be dynamic
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        
    }, [])
    
    console.log(userId, title, description, imageUrl, category)

    

    return (
        <div className='AddComment'>
           <h3>How Do I...</h3>
            <form name='howDoForm' className='howDoForm'>
                <input
                    type='text'
                    placeholder='How Do I...'
                    name='title'
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}/>
                <textarea
                    placeholder='Add any additional details/description here...🦝'
                    name='description'
                    rows='3'
                    cols='30'
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                <input
                    type='url'
                    placeholder='Add an image url here if you would like...'
                    name='image_url'
                    value={imageUrl}
                    required
                    onChange={(e) => setImageUrl(e.target.value)}/>
                <select id='status' name='category' onChange={(e) => setCategory(e.target.value)}>
                    <option value=''>What can does this belong in?</option>
                    <option value='home_improvement'>Home Improvement</option>
                    <option value='hobbies'>Hobbies</option>
                    <option value='life_hacks'>Life Hacks</option>
                    <option value='food_and_drink'>Food & Drink</option>
                    <option value='outdoors'>Outdoors</option>
                </select>   
                <button
                    type='submit'
                    value='addHowDo'
                    onClick={() => socket.emit("create-post", {userId, title, description, imageUrl, category})}>Ask</button>
            </form>
        </div>
    )
}

export default AddComment;