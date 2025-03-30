import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import React, { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        
        // ✅ Use API key from .env
        const apiKey = import.meta.env.VITE_WEB3FORMS_API_KEY;
        
        if (!apiKey) {
            setResult("Error: API Key is missing!");
            console.error("API Key is missing. Please check your .env file.");
            return;
        }

        formData.append("access_key", apiKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form submitted successfully!");
                event.target.reset();
                setTimeout(() => setResult(""), 5000);
            } else {
                console.error("Error:", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send your message <img src={msg_icon} alt="" /></h3>
                <p>
                    Feel free to get in touch through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> hajihaju19@gmail.com</li>
                    <li><img src={phone_icon} alt="" /> (41) 9360833479</li>
                    <li><img src={location_icon} alt="" /> D.K.M COLLEGE FOR WOMEN (AUTOMATIC), VELLORE</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="Enter your phone number" required />
                    
                    <label>Message</label>
                    <textarea name="message" rows="6" placeholder="Write your message" required></textarea>
                    
                    <button type="submit" className="btn dark-btn">Send <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
