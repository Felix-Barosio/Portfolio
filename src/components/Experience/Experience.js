import React from 'react'
import './Experience.css'
import { RiCheckboxCircleFill } from 'react-icons/ri'


const Experience = () => {
    const frontEnd = ["HTML", "CSS-SASS", "JavaScript", "React", "Redux", "Material UI"];
    const backEnd = ["Ruby", "Sinatra", "Active Record", "Ruby on Rails", "SQLite", "PostgreSQL"];

    const renderExperience = (array) => {
        return array.map((item => {
            return (
                <article className='expe_item'>
                    <RiCheckboxCircleFill className='expe_icon' />
                    <div>
                        <h4>{item}</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
            )
        }))
    }

    return (
        <section id='experience'>
            <h5>What Skills Do I Have</h5>
            <h2>My Experience</h2>

            <div className='container expe_container'>

                <div className='expe_frontend'>
                    <h3>Frontend Development</h3>
                    <div className='expe_content'>
                        {renderExperience(frontEnd)}
                    </div>
                </div>

                <div className='expe_backend'>
                    <h3>Backend Development</h3>
                    <div className='expe_content'>
                        {renderExperience(backEnd)}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience