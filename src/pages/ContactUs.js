import React, {useState} from "react";
import axios from 'axios';

export default function ContactUs( {url} ) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    function sendMessage(e) {
        e.preventDefault();

        e.preventDefault();
        const json = JSON.stringify({ name: name, email: email, message: message })
    
        axios.post(url + 'products/message.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
    
            setMessages(messages => [...messages, response.data])
            setName(messages => [...messages, response.data])
            setEmail(messages => [...messages, response.data])
            setMessage(messages => [...messages, response.data])
            setName('')
            setEmail('')
            setMessage('')
          }).catch(error => {
            alert(error.response ? error.response.error : error)
          })

        alert("Kiitos viestistäsi!");  
    }
    
    return (
            <div>
                <h3 className="contactUs">Ota yhteyttä</h3>
                <form onSubmit={sendMessage}>
                    <label htmlFor="name">Nimi:</label><br/>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="Nimi" required /><br/>
                    <label htmlFor="name">Sähköposti:</label><br/>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="esimerkki@esimerkki.com" required /><br/>
                    <label htmlFor="message">Viesti:</label><br/>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} name="message" rows="8" cols="30" maxLength='500' placeholder="Viestisi tähän" required/><br/>
                    <button type="submit">Lähetä</button>
                </form>
            </div>
    )
}