import React from 'react';
import './about.css';
import aboutLogo from '../images/aboutLogo2.png'


const aboutPage = () => {

    return (
        <div className='holding-container-about'>
               
        <div className='header-style'>
        <img src={aboutLogo} alt="Logo" className='logo-image-size' />
        
            <p className='intro'>
            Hi! I'm Eduardo Ramos. My friends call me Ed. <br></br>
            I am a 23 year old software engineer living in San Francisco. 
            <br></br>I enjoy photography, coding and building cool stuff.
            </p>
            
            <p className='begin'><b>Where my journey begins</b></p><br></br>
            <div class="timeline">
        
                <div class="container left">
                    <div class="content">
                    <h2>May 2015</h2>
                    <p>Graduated from Bonita Vista High School in San Diego, CA</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                    <h2>August 2018</h2>
                    <p>Moved from San Diego, CA and relocated to San Francisco, CA</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                    <h2>May 2020</h2>
                    <p>Graduated From San Francisco State University 
                <br></br>With a B.S. in Computer Science</p>
                    </div>
                </div>
            </div>
        <p className='end'>And so the journey continues...</p>

        </div> 

        </div>
    )
}

export default aboutPage;