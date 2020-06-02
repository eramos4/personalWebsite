import React from 'react';
import './contact.css';
import resume from '../images/Resume2.pdf'
import emailLogo from '../images/email_card.png'
import instaLogo from '../images/insta_card.png'
import githubLogo from '../images/github_card.png'
import resumeLogo from '../images/resume_card.png'
import logo from '../images/aboutLogo.png'

const contact = () => {
    return (

        <div className='contact-container'>
            <p className='contacts'>
                <b>CONTACT ME</b>
            </p>


            <div className='card'>
                <div className='logo'>
                     <img src={logo} className='logo-image'></img>
                </div>
               
            <div className='links'>
                <img src={emailLogo} className='email-image'></img>
                <a href='mailto:ramosedward8@gmail.com?Subject=Hey%20Ed!' className='email-card'>ramosedward8@gmail.com</a>

                <img src={instaLogo} className='insta-image'></img>
                <a href='https://www.instagram.com/movingphotographs/' className='insta-card'>movingphotographs</a>
                <br></br>
                <img src={githubLogo} className='github-image'></img>
                <a href='https://github.com/eramos4' className='github-card'>My GitHub</a>
                <br></br>
                <img src={resumeLogo} className='resume-image'></img>
                <a href={resume} className='resume-card'>Download my resume</a>

            </div>    
            
            </div>

            <div>

            {/* <p className='email-title'>Email Me</p> */}
            
            {/* <img src={email} alt='email' className='email-image'></img> */}

            {/* <p>Let's Talk! Looking for software engineering opportunities
                in the San Francisco, Bay Area
            </p> */}

            
            </div>


            
            
        </div>


    )
}
    
    
    
export default contact;
       