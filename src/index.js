// two modules required 
import React from 'react';
import ReactDOM from 'react-dom';

const flname = 'Manan Patel';
const currDate = new Date().toLocaleDateString();
//const currDate = new Date().toLocaleDateString();const currDate = new Date().toLocaleDateString();const currDate = new Date().toLocaleDateString();

function tick() {
  const element = (
    <div>
      <p> Date : {currDate} <br></br>Time : {new Date().toLocaleTimeString()}</p>
    </div>
  );
  ReactDOM.render( 
    <> 
     <h1>{`Portfolio - ${flname}`}</h1> 
      
    <p>{element} </p>
    
     <p> Hardworking and motivated Software Engineer in the last semester of Bachelor’s degree (Computer and
   Software systems) with a flair for creating elegant solutions in a limited time. Developed an attendance
   management web app and QR-code based visitor management sys for a start-up. Passionate about software
   architecture and cloud computing to shape the environment by contributing in developing world-leading
   products in ranging domains.</p> 
   <ol>
       <h3>Professional Skills </h3>
     <li>The longing to learn, perform various tasks and fulfil contending deadlines</li>
     <li>A constructive and innovative approach to problem solving</li>
     <li>Clear communication capabilities for efficient exchange of ideas and concepts</li>
     <li>A solid cooperative person who likes to tune in, help other people and work together with colleagues</li>
     <li>A versatile character who can adjust to change</li>
     <li>Proven time-management skills developed from casual employment while studying and undertaking
 internship and volunteering placements.</li>
 
   </ol>
   
    </>,
  
    
     document.getElementById('root'));
  
  }


  setInterval(tick, 1000);