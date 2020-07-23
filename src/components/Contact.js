import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TextareaAutosize, TextField, Button } from '@material-ui/core'

const Contact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className='contact-container'>
      <section className='contact-box'>
        <header className='contact-header'>Need to get in touch?</header>
        <h5 id='input-title'>Name</h5>
        <TextField
          //name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <h5 id='input-title'>Email</h5>
        <TextField
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          type='email'
        />
        <h5 id='input-title'>Subject</h5>
        <TextField
          onChange={(e) => {
            setSubject(e.target.value)
          }}
          value={subject}
        />
        <h5 id='input-title'>Message</h5>
        <TextareaAutosize
          className='contact-input-text'
          rows='3'
          cols='38'
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          value={message}
        />
        <div className='contact-button-container'>
          <button
            //   variant="outlined"
            className='addpost-submit-button'
            onClick={() => {
              axios.post(`/howdo/contact`, { name, subject, email, message })
              toast.success('Message sent', {
                position: toast.POSITION.BOTTOM_RIGHT,
              })
              setEmail('')
              setName('')
              setSubject('')
              setMessage('')
            }}>
            Send
          </button>
        </div>
      </section>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default Contact
