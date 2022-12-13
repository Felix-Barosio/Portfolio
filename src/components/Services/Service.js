import React from 'react'

const Service = () => {
    const frontEndServices = ['HTML', 'CSS', 'Javascript (Vanilla)', 'React']
    const backEndServices = ['Ruby', 'Ruby on Rails', 'NodeJs', 'PostgreSQL']
    const otherServices = ['Git - Version Control', 'Github', 'Heroku', 'Netlify']

    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container services_container'>
            </div>
        </section>
    )
}

export default Service
