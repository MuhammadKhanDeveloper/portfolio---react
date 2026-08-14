import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/shahzaib-rasheed-rind-b3976a170/',
      name: 'Shahzaib Rasheed Rind',
      role: 'Full Stack Developer | MERN Stack. ',
      test:' I had the opportunity to work with him on development projects, and I was impressed by his strong understanding of the MERN stack and his problem-solving approach. His experience with React.js, React Native, Node.js, Express.js, REST APIs, and MongoDB reflects his ability to work across both frontend and backend development. He is a dedicated developer, a great team player, and someone who continuously works on improving his skills.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/mairaj-khan-/',
      name: 'Mairaj Khan',
      role: 'Full Stack Developer | React.js | Next.js | React Native | Node.js | Express.js | MongoDB',
      test: "He is a skilled and dedicated developer with strong expertise in modern web technologies. His experience with React.js, Next.js, TypeScript, React Native, Node.js, Express.js, MongoDB, GraphQL, and Hasura reflects his ability to work across both frontend and backend development. He has a strong understanding of JavaScript and a professional approach to building web applications.",
    },
   
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials