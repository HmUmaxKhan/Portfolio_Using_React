import React, { useEffect } from 'react';
import { initScrollReveal, initTyped } from '../utils/animations';


function About() {

  useEffect(() => {
    initScrollReveal();
    initTyped();
  },[])
  
  return (
    <div><section class="about" id="about">
    <div class="about-img">
        <img src={require("../Assests/Images/About2.png")} alt="" />
    </div>
    <div class="aboutMe">
        <h2 class="heading">About <span>Me</span></h2>
        <h3><span class="multiple-text2"></span></h3>
        <p>I am Muhammad Umar Khan, a highly motivated and dedicated Software Engineering student with a strong
            passion for creating innovative software solutions. Currently pursuing my degree at the prestigious
            <em><span>National University of Science and Technology (NUST)</span></em>, I am driven to excel in the
            dynamic field of technology. With a solid educational foundation from Divisional Public School and
            College Sahiwal, I have developed a strong understanding of programming languages, software development
            methodologies, and cutting-edge technologies.
    
            My primary focus lies in <em><span>Development, Artificial Intelligence, App Development, and Cyber
                    Security</span></em>, where I strive to leverage my skills to design and develop efficient and
            user-centric software systems.<br></br>I have developed proficiency as a <em><span>web developer</span></em>,
            enabling me to create end-to-end solutions for web applications.
    
            On the front-end side, I am well-versed in <em><span>HTML, CSS, and JavaScript</span></em>, and I have
            experience with popular frameworks such as <em><span>React.js and Angular</span></em>. I can design
            intuitive and visually appealing user interfaces that deliver a seamless user experience.
    
            When it comes to back-end development, I have worked with languages like <em><span>Node.js</span></em>.
            I have knowledge of server-side frameworks such as <em><span>Express.js</span></em>. I am skilled in
            database management using SQL and NoSQL databases like <em><span>MySQL, MongoDB, and
                    Firebase.</span></em><br></br>
    
            By engaging in hands-on projects and internships, I have honed my practical skills and gained valuable
            insights into real-world software development scenarios. Through my academic journey at NUST, I have had
            the opportunity to learn from experienced professionals in the industry, enabling me to refine my
            technical expertise and problem-solving abilities. I am committed to staying updated with the latest
            industry trends and advancements, and possess a natural curiosity and eagerness to learn, which fuels my
            drive for continuous growth and improvement.
            <br></br>
    
            With my <em><span>full-stack web development skills</span></em>, I can develop robust and scalable web
            applications from concept to deployment. I am capable of handling the entire development process,
            including designing the database schema, implementing server-side logic, and creating responsive and
            interactive front-end interfaces.
            <br></br>
    
            My ultimate goal is to become a proficient software engineer who contributes to the development of
            high-quality and impactful software products. I am excited about the opportunities that lie ahead and
            look forward to collaborating with like-minded professionals, exploring new challenges, and making a
            significant contribution to the ever-evolving world of technology.
            <br></br>
    
            Feel free to reach out to connect and explore potential opportunities for collaboration and growth.
        </p>
    </div>
    </section>
    </div>
  )
}

export default About