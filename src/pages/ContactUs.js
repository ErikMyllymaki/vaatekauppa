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
                    <label for="name">Nimi:</label><br/>
                    <input type="text" name="name" id="name" placeholder="Nimi" required/><br/>
                    <label for="name">Sähköposti:</label><br/>
                    <input type="email" name="email" id="email" placeholder="esimerkki@esimerkki.com" required/><br/>
                    <label for="message">Viesti:</label><br/>
                    <textarea name="message" rows="8" cols="30" placeholder="Viestisi tähän" required/><br/>
                    <button type="submit">Lähetä</button>
                </form>
            </div>
    )
}