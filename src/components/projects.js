import React from 'react';
import './project.css';
import biomedSite from '../images/biomedSite.png'


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