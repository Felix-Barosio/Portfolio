import React from 'react'
import './Service.css'
import { RiCheckFill } from 'react-icons/ri'

const Service = () => {
    const frontEndServices = ['HTML', 'CSS', 'Javascript (Vanilla)', 'React']
    const backEndServices = ['Ruby', 'Ruby on Rails', 'NodeJs', 'PostgreSQL']
    const otherServices = ['Git - Version Control', 'Github', 'Heroku', 'Netlify']

    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container services_container'>

                <article className='service'>
                    <div className='service_header'>
                        <h3> Front End Development </h3>
                    </div>
                    <ul className='service_list'>
                        {renderServices(frontEndServices)}
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Service
