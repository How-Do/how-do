import React, {Component} from 'react'
import axios from 'axios'

//This component still needs to be updated to be able to pull the user from session once login is working

class Post extends Component {
    constructor() {
        super()
        this.state = {
            user_id: 1, //<-- This needs to be dynamic
            title: '',
            description: '',
            image_url: '',
            category: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    addProduct = (e) => {
        const {user_id, title, description, image_url, category} = this.state
        axios.post('/howdo', {user_id, title, description, image_url, category})
        .then(res => (console.log(res)))
    }

    render() {
        const {title, description, image_url} = this.state
        console.log(this.state)

        return(
            <div className='newHowDo'>
                <h3>How Do I...</h3>
                <form name='howDoForm' className='howDoForm'>
                    <input
                        type='text'
                        placeholder='How Do I...'
                        name='title'
                        value={title}
                        required
                        onChange={(e) => this.changeHandler(e)}/>
                    <textarea
                        placeholder='Add any additional details/description here...🦝'
                        name='description'
                        rows='3'
                        cols='30'
                        required
                        value={description}
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='url'
                        placeholder='Add an image url here if you would like...'
                        name='image_url'
                        value={image_url}
                        required
                        onChange={(e) => this.changeHandler(e)}/>
                    <select id='status' name='category' onChange={(e) => this.changeHandler(e)}>
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
                        onClick={(e) => this.addProduct(e)}>Ask</button>
                </form>
            </div>
        )
    }
}

export default Post