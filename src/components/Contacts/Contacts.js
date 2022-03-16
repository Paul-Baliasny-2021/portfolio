import React from 'react';
import './Contacts.css';
import address from '../../images/address.png';
import emailIcon from '../../images/email.png';
import phone from '../../images/phone.png';
import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../Context';

function Contacts() {

    const formRef = useRef();
    const [complete, setComplete] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    function resetForm() {
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
    };

    function handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_3ipm11w', 'template_4x5dltc', formRef.current, 'yZwkc_OLqBQAFNf9u')
            .then((result) => {
                console.log(result.text);
                setComplete(true);
                resetForm();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contacts'>
            <div className='contacts__back'></div>
            <div className='contacts__wrapper'>
                <div className='contacts__left'>
                    <h2 className='contacts__title'>Let's discuss our next project</h2>
                    <div className='contacts__info'>
                        <div className='contacts__item'>
                            <img src={phone} alt='Phone' className='contacts__icon' />
                            +972-52-3973332
                        </div>
                        <div className='contacts__item'>
                            <img src={emailIcon} alt='Email' className='contacts__icon' />
                            paulbalasny2003@yahoo.com
                        </div>
                        <div className='contacts__item'>
                            <img src={address} alt='' className='contacts__icon' />
                            Central District, Israel
                        </div>
                    </div>
                </div>
                <div className='contacts__right'>
                    <p className='contacts__description'>
                        <b>What's your story?</b> Get in touch. Always available for offers if the right one comes along.
                    </p>
                    <form className='contacts__form' ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && '#333'}} className='contacts__input' type='text' placeholder='Name' name='user_name' required value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input style={{ backgroundColor: darkMode && '#333'}} className='contacts__input' type='text' placeholder='Subject' name='user_subject' value={subject} onChange={(e) => { setSubject(e.target.value) }} required />
                        <input style={{ backgroundColor: darkMode && '#333'}} className='contacts__input' type='email' placeholder='Email' name='user_email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                        <textarea style={{ backgroundColor: darkMode && '#333'}} className='contacts__textarea' rows={5} placeholder='Message' name='message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                        <button className='contacts__submit' type='submit'>Send your message</button>
                        {complete && <p className='contacts__thank'>Thank you for your interest</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
