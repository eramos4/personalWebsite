import React from 'react';
import './project.css';
import biomedSite from '../images/biomedSite.png'
import gg from '../images/gg.png'
import Iframe from 'react-iframe'
import iphone from '../images/iphone.png'

const projects = () => {
    return (
        <div className='grid-container-projects'>

     

             <p className='projects'>
                    <b> PROJECTS</b>
                     </p>


            <div className='project-container'>
            <p id='padding-text'>
            <h2> <a href="http://baddatahealth.com/" className='biomed-title'>http://baddatahealth.com/</a></h2>
                Some regions in the world lack medical practitioners to analyze data from biomedical imaging devices.

                Places might count with equipment but a diagnosis of the results requires an expert in such analysis.

                This project aims to give some aid in disease prediction, by providing an easy to use web-based application. 

                Deep learning has been successful for the task of prediction, using deep learning requires some skill, 

                so we wanted to make this as simple as possible for the user.
                    
                    </p>
                    
                    <div >
                        
                    <img src={biomedSite} alt="Biomed" className='image-size' /> 
                    </div>
            </div>

            <div className='project-container'>
            <div >
                        
                    
                        {/* <Iframe url="https://www.gatorgroceries.com/"
                            width="265px"
                            height="672px"
                            id="myId"
                            overflow= "hidden"
                            scrolling= "auto"
                            
                            className="gg-image-size"
                            
                        /> */}
    
                        <img src={gg} alt="gg" className='iphone-image-size'></img>
                        </div>
            <p id='gg-padding-text'>
            <h2> <a href="https://www.gatorgroceries.com/" className='gg-title'>https://www.gatorgroceries.com/</a></h2>
                Gator Groceries is a free service provided by the associated students in partnership with the San Francisco Foodbank 
                
                for students who are experiencing food insecurity. Our goal with the Gator Groceries website is to make it as easy as possible for students to recieve the food they need
                
                and for staff to efficiently distribute food.

                With the Gator Groceries website students can place orders for upcominmg 

                food distribution events and see upcoming events. Admin can create events and view all the orders created for preparation. 

                    </p>
                    
                   
            </div>

        
        </div>
       
    )
}



export default projects;


 // <div className='grid-container-projects'> 
        //     <p className='projects'>
        //             <b> PROJECTS</b>
        //             </p>

            
               
        //         <div className='project-container'>
                 
        //         <a href="http://baddatahealth.com/" className='biomed-title'>http://baddatahealth.com/</a>
               
        //         <p className='biomed-about'>
        //         Some regions in the world lack medical practitioners to analyze data from biomedical imaging devices.<br></br> 

        //         Places might count with equipment but a diagnosis of the results requires an expert in such analysis.<br></br>

        //         This project aims to give some aid in disease prediction, by providing an easy to use web-based application. <br></br>

        //         Deep learning has been successful for the task of prediction, using deep learning requires some skill, <br></br>

        //         so we wanted to make this as simple as possible for the user.
        //         </p>


        //          <img src={biomedSite} alt="Biomed" className='image-size' /> 
        //         </div>
               
        //         <div className='project-item'>
                   
        //         </div> 
                    
           

        // </div>