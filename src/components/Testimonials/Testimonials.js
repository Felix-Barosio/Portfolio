import React from 'react'
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            avatar: Pic,
            name: 'Beckett',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi."
        },
        {
            id: 2,
            avatar: Pic,
            name: 'Rick Castle',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi."
        },
        {
            id: 3,
            avatar: Pic,
            name: 'Jessica',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi."
        },
        {
            id: 4,
            avatar: Pic,
            name: 'Mike',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi."
        },
        {
            id: 5,
            avatar: Pic,
            name: 'Sam',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi."
        }
    ]

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
