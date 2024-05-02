import React from 'react';
import emailjs from 'emailjs-com';

const EmailModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fqy8hrb', 'template_1t0tpp8', e.target, 'Xaoc-lp-nmD-BOtBy')
            .then((result) => {
                console.log('Email Sent!', result.text);
                onClose(); // Close the modal after sending the email
            }, (error) => {
                console.log('Failed to send email.', error.text);
            });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={sendEmail}>
                    <label>To Name:</label>
                    <input type="text" name="to_name" required />
                    <label>From Name:</label>
                    <input type="text" name="from_name" required />
                    <label>Email:</label>
                    <input type="email" name="user_email" required />
                    <label>Event Date:</label>
                    <input type="date" name="event_date" required />
                    <label>Message:</label>
                    <textarea name="message" required />
                    <button type="submit">Send Invite</button>
                </form>
            </div>
        </div>
    );
};

export default EmailModal;