import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import "../../App.css";
import "../Api/ServiceApi";
import { serviceapi } from '../Api/ServiceApi';
import Footer from '../Footer';

function Services() {
  const [serviceData,setServiceData] =useState(serviceapi);  
  return (
    <>
      <section className='service-main-container'>
        <div className='container service-container'>
          
            <h1 className='main-heading text-center fw-bold'>Our Services avilable.</h1>
         
          <div className='row'>
            {
              serviceData.map((curElement)=>{
                const{id,logo,title,info}=curElement;
                return(
                <>
                    <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv' key={id}>
                        <i  className={`fontawesome-style ${logo}`}></i>
                        <a className='subheading'>{title}</a>
                        <p className='subheading'>{info}</p>
                   </div>
                </>)

              })
            }
            
          </div>

        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Services;
