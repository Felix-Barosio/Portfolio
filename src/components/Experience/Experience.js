import React from 'react'
import './Experience.css'


const Experience = () => {
    const frontEnd = ["HTML", "CSS-SASS", "JavaScript", "React", "Redux", "Material UI"];
    const backEnd = ["Ruby", "Sinatra", "Active Record", "Ruby on Rails", "SQLite", "PostgreSQL"];

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