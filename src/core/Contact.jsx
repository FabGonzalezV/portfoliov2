import React, { useState } from 'react';
import Navbar from "./Navbar"
import "./../css/styles.css"
import emailjs from 'emailjs-com';
 
export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const isFormEmpty = !name || !email || !message;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormEmpty) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const serviceID = 'service_l7mv6zl'; // Reemplaza con tu ID de servicio
        const templateID = 'template_aai3fbf'; // Reemplaza con tu ID de plantilla
        const userID = 'Vw91Wm3ESQo0U24C7'; // Reemplaza con tu ID de usuario

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('Correo enviado:', response);
                alert('Correo enviado con éxito');
                window.location.href = "/";

            })
            .catch((error) => {
                console.error('Error al enviar el correo:', error);
                alert('Hubo un error al enviar el correo');
            });
    };

    return (

        <>
         <Navbar/>
            <div className="contact-form white-text">
                <h2>Contacto</h2>
                <form>
                    <div className="input-container">
                        <label htmlFor="name">Nombre RH:</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            required
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                        required
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </div>
                    <button onClick={handleSubmit}>Contactar</button>
                </form>
            </div>
        </>
    );
};


