import React from 'react';
import './projects.css';

import project2 from '../img/amazon-clone.jpg'
import project3 from '../img/blog-1.jpg'
import project4 from '../img/blog-2.jpg'
import project5 from '../img/blog-3.jpg'
import project11 from "../img/famms1.jpg"
import project12 from "../img/amazon1.0.jpg"
import project13 from "../img/linkedin-clone.jpg"

function Projects() {
  return (
    <section className="our-projects"> 
      <div className="skew-arriba" id='skew_project'></div>
      <div className="deg-background"></div>

      <div className="ejeZproject">

        <div className="container-project">

          <div className="project-title">
            <h2  id="projects" className='h2-mobile'>PROJECTS</h2>

          </div>

          <div className="project-img">

            {/* project1 */}
            <div className="pro">
              
              <a href="https://famms-fashion.web.app/" className='pro-img-link'><img src={project11} className="proimg-box" alt=""/></a>

              <div className="pro__text">
                  <h3>E-Commerce</h3>
                  <p> In this project, we will develop an e-commerce website for selling various products online. The website will allow customers to browse through a range of products, add them to their cart, and make secure online payments.</p>
                  <div className="stack">
                      <p>React</p>
                      <p>Tailwind CSS</p>
                  </div>
                  <div className="links">
                      <a href="" target="_blank"></a>
                      <a href="" target="_blank"></a>
                  </div>
              </div>
                
            </div>

            {/* project2 */}
            <div className="pro">
              
              <a href="https://ecommerce-f4b53.web.app/" className='pro-img-link'><img src={project12} className="proimg-box" alt=""/></a>
              <div className="pro__text">
                  <h3>Amazon-Clone</h3>
                  <p>The Amazon-Clone project is a website development project that aims to create an e-commerce platform similar to Amazon. The website will allow customers to browse and buy a variety of products online.</p>
                  <div className="stack">
                      <p>React</p>
                      <p>CSS</p>
                  </div>
                  <div className="links">
                      <a href="" target="_blank"></a>
                      <a href="" target="_blank"></a>
                  </div>
              </div>  
            </div>

            {/* project3 */}
            <div className="pro">
              
              <a href="https://linkedin-4a9f2.web.app/" className='pro-img-link'><img src={project13} className="proimg-box" alt=""/></a>

              <div className="pro__text">
                  <h3>Linkedin Clone</h3>
                  <p>The Amazon-Clone project is a website development project that aims to create an e-commerce platform similar to Amazon. The website will allow customers to browse and buy a variety of products online.</p>
                  <div className="stack">
                      <p>React</p>
                      <p>CSS</p>
                  </div>
                  <div className="links">
                      <a href="" target="_blank"></a>
                      <a href="" target="_blank"></a>
                  </div>
              </div>
                
            </div>
            <a href="https://ecommerce-f4b53.web.app/" target="_blank" className='project-link'><img src={project2} alt=""/><div class="option_container"><h4 className='box_title'>Amazon-Clone</h4></div></a>
            <a href="https://blog-3-8fa22.web.app/" target="_blank" className='project-link'><img src={project5} alt=""/><div class="option_container"><h4 className='box_title'>Blog</h4></div></a>
            <a href="https://blog-2-aa8dd.web.app/" target="_blank" className='project-link'><img src={project4} alt=""/><div class="option_container"><h4 className='box_title'>Blog</h4></div></a>
            <a href="https://blog-1-40308.web.app/" target="_blank" className='project-link'><img src={project3} alt=""/><div class="option_container"><h4 className='box_title'>Website</h4></div></a>
            
          </div>          
        </div>
      </div>
      <div className="skew-abajo1" id='skew_project'></div>
  </section>

  )
}

export default Projects