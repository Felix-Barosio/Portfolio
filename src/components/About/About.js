import React from 'react'
import './About.css'
import Pic from '../../assets/images/profile2.png'
import { RiAwardLine, RiFolder5Line } from 'react-icons/ri'
import { TbUsers } from 'react-icons/tb'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know Me</h5>
            <h2>About Me</h2>

            <div className='container about_container'>

                <div className='about_me'>
                    <div className='about_me_image'>
                        <img src={Pic} alt='about me' />
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <RiAwardLine className='about_icon' />
                            <h5>Experience</h5>
                            <small>1 + Years Working</small>
                        </article>

                        <article className='about_card'>
                            <TbUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>No clients yet</small>
                        </article>

                        <article className='about_card'>
                            <RiFolder5Line className='about_icon' />
                            <h5>Projects</h5>
                            <small>5 projects</small>
                        </article>
                    </div>
                    <p>
                        Am a multi-talented human being with the specialties in Problem Solving, UI/UX Designing, Full Stack Web Developing & Product Designing. I'm Never satisfied to just come up with Ideas, instead I have an Impulsive need to act on them. I don't like to define myself by the work I've Done rather by the work I want to do.
                    </p>
                    <a href='#contact' className='btn btn-primary'> Let's Talk </a>
                </div>
            </div>
        </section>
    )
}

export default About;
