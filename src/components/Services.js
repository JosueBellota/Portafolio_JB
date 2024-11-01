import React from 'react'
import './css/services.css';
import service1 from '../img/responsive not.jpg';
import service2 from '../img/Navigation.jpg';
import service3 from '../img/icons.jpg';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LaptopIcon from '@mui/icons-material/Laptop';
import TableViewIcon from '@mui/icons-material/TableView';

function Services() {
  return (
    <div className="services">
     
        <h2 id='services_title' className='h2-mobile'>SERVICES</h2 >
        <div className="row">
  
            <div className="services-box">
            <RocketLaunchIcon className="fa fa-rocket"></RocketLaunchIcon><span>Mobile Compatibility</span>
            <div className='service-effect'>
            <img src={service1} className='img-service' alt=""/>
            <div className="option_service">
                <p className="container_test">To ensure that your website is compatible with mobile devices, you should use responsive design techniques. Responsive design allows webpages to fit the layout and content of the websites to the device it is being viewed on. This is done by using media queries and breakpoints, which are set based on the size of the device.</p>
            </div>
            </div>
         
            </div>
            
    
            <div className="services-box">
            <LaptopIcon className="fa fa-laptop"></LaptopIcon><span>Effective Navigation</span>
            <div className='service-effect'>
            <img src={service2} className='img-service' alt=""/>
            <div className="option_service">
                <p className="container_test">Ensure your business always stays ahead of the competition with Effective Navigation. With a simple yet powerful design, Effective Navigation makes it easy to get from point A to point B without ever getting lost.</p>
            </div>
            </div>
            </div>
        
            <div className="services-box">
            <LaptopIcon className="fa fa-line-chart"></LaptopIcon><span>Usable Forms
            </span>
            <div className='service-effect'>
            <img src={service3} className='img-service' alt=""/>
            <div className="option_service">
                <p className="container_test">The use of understandable forms on a website is vital to ensure an optimal user experience. Clear and concise forms provide a great way to collect data from visitors, while also making it easier for them to interact with the website. </p>
            </div>
            </div> 
            </div>
       
        </div>
    </div>
)
}

export default Services