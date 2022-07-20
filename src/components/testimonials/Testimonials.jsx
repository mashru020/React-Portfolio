import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:Avt1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet. Asperiores quasi cum, exercitationem consectetur quibusdam possimus ullam est, fugiat odit vitae officiis sequi aliquam nam illo atque necessitatibus et, esse beatae!'
  },
  {
    avatar:Avt2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse minima optio a unde quos dolor repellendus aperiam praesentium. Suscipit.'
  },
  {
    avatar:Avt3,
    name: 'John Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi cum, exercitationem consectetur quibusdam possimus ullam est, fugiat odit vitae officiis sequi aliquam nam illo atque necessitatibus et, esse beatae!'
  },
  {
    avatar:Avt4,
    name: 'Ernst Achiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi cum, exercitationem consectetur quibusdam possimus ullam est, fugiat odit vitae officiis sequi aliquam nam illo atque necessitatibus et, esse beatae!'
  },
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review}, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials