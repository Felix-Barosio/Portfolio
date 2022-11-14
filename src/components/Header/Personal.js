import React from 'react'
import Resume from '../../assets/files/Resume.pdf'

const Personal = () => {
    return (
        <div>
            <div className='personal'>
                <a href={Resume} download className='btn'> Download Resume </a>
                <a href='#contact' className='btn btn-primary'> Let's Talk </a>
            </div>
        </div>
    )
}

export default Personal