import React from 'react'
import CV from '../../assets/files/Resume.pdf'

const Personal = () => {
    return (
        <div>
            <div className='personal'>
                <a href={CV} download className='btn'> Download CV </a>
                <a href='#contact' className='btn btn-primary'> Let's Talk </a>
            </div>
        </div>
    )
}

export default Personal;
