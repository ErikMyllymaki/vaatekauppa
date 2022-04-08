import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {

    function sendMessage(e) {
        e.preventDefault();
        alert("Kiitos viestistäsi!");  
    }
    
    return (
            <div>
                <h2>Ota yhteyttä</h2>
                <form onSubmit={sendMessage}>
                    <label htmlFor="name">Nimi:</label><br/>
                    <input type="text" name="name" id="name" required/><br/>
                    <label htmlFor="name">Sähköposti:</label><br/>
                    <input type="email" name="email" id="email" required/><br/>
                    <label htmlFor="message">Viesti:</label><br/>
                    <textarea name="message" rows="8" cols="30" required/><br/>
                    <button type="submit">Lähetä</button>
                </form>
            </div>
    )
}