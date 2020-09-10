import React from 'react'

export default function Resume() {
  return (
    <>
      <div className="resume-container">
        <div className="resume-header">
          <h1>ANTHONY ZARDIS</h1>
          <h3>anthonyzardis@gmail.com | 206.313.8631</h3>
          <h3 >
              <a style={{ color: 'black' }} href="https://www.github.com/206tony/">Github</a>  |  
              <a style={{ color: 'black' }} href="https://www.linkedin.com/in/anthony-zardis">LinkedIn</a>
          </h3>
        </div><br/>

        <div className='resume-body'>
          <div>
            <h3>Summary</h3><hr/>
            <p>
              Resourceful entry level Software Engineer, enthusiastic about developing practical and time saving software solutions. 
              Adept at identifying issues with existing software and creating innovate new software programs. A creative and talented leader; 
              committed to working cross-functionally with all stakeholders to deliver meticulous execution of the final project.
            </p>
          </div><br/>

          <div>
            <h3>Technical Skills</h3><hr/>
            <p>JavaScript, React, Node, Git, HTML, CSS, SQL, Postgres, Mongo, Mongoose, Ruby, Python, Typescript, Rails </p>
          </div><br/>

          <div>
            <h4>General Assembly Projects</h4><hr/>
          </div>

          <div>
            <h5>Connect 4 - JavaScript, DOM, CSS, HTML</h5>
            {/* <p>A front end two player game. A childhood favorite for testing your wit.</p> */}
          </div>

          <div>
            <h5> Marvel Fan - Node, EJS, Axios, Bcrypt, Sequelize, Express, Helmet, MD5, Passport, Method-Override</h5> 
            {/* <p>A fullstack Comic Book site for finding favorite characters and comics</p>  */}
          </div>

          <div>
            <h5>CockTail-Time – React, Node, Axios, Bcrypt, Express, JWT, Mongoose, Helmet, DotEnv</h5>
            {/* <p>A fullstack group project where you can learn to make your favorite drinks</p> */}
          </div>

          <div>
            <h5>Lego-WishList – React, Node, Axios, Bootstrap, React-Router, Mongoose, JWT, Express, Bcrypt</h5>
            {/* <p>A fullstack app where a user can search for sets and find pieces they are missing.</p> */}
          </div><br/> 

          <div>
            <h3>Education</h3><hr/>
            <p>Bachelor of Arts, Supply Chain Management | Central Washington University, 2016</p><br/>
            <p>Software Development Immersive | Bloc, 2017</p><br/>
            <p>Software Engineering Immersive|General Assembly, 2019</p>
          </div><br/>

          <div>
            <h3>Skills / Work Experience</h3><hr/>
            <p>
              Project Management • Customer Service • Budget Management • Training & Development • Hydraulic System Design • Payroll
              • Vendor Management • Customer Experience • Operations Coordination • Team Management • Journeyman Machinist • 
              Accounts Receivable/Payable • Custom Fabrication • Financial Reporting
            </p>
          </div><br/>

          <div>
            <h3>Puget Sound Hydraulics | Project Manager, 2008-2016</h3><hr/>
            <p>
                Expanded my knowledge base to achieve journeymen level as both a Machinist and Mechanic. Advanced to Project Management 
                and led multiple complex job sites on strict production deadlines while maintaining quality standards. Specialized in efficient 
                project turnaround to maximize productivity in addition to profits
            </p>
          </div>

          <div>
            <h3>Western Peterbilt | Accounting Associate, 2005-2008</h3><hr/>
            <p>
              Held responsibility for accurate preparation, analysis, and reporting of accounts receivables, payables, payroll, warranty work, 
              and customer accounts. Worked as a team player and was instrumental in streamlining office functions to enhance productivity and 
              maximize financial control.
            </p>
          </div>

          <div>
            <h3>Carter Volkswagen | Accounting Clerk, 2001-2005 </h3><hr/>
            <p>
              Utilized my strong mathematical skills and ability to manage complex systems and large amounts of data. Fostered and maintained 
              long-term relationships with customers and vendors by providing exceptional customer service. Simultaneously managed current and 
              outstanding receivables and warranties, while keeping current on all balance and month-end reporting.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}