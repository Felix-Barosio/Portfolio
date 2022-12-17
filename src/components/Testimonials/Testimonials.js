import React from 'react'
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {

    return (
        <section id='testimonials'>
            <h5>Client Reviews</h5>
            <h2>Testimonials</h2>
            <div className="container testimonial_container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial;
