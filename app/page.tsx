/* eslint-disable @next/next/no-img-element */
"use client"
// LandingPage.tsx
import React, { useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CarouselItem, Event } from './types';

const LandingPage: React.FC = () => {
  const carouselData: CarouselItem[] = useMemo(
    () => [
      {
        title: 'Students and Principal',
        image: '/images/sliders/slide-1.jpg', // Update the path
        text:
          'At Schield Center, we strive to create a nurturing learning environment that values diversity and inclusivity. We believe that education is not just about acquiring knowledge and skills, but also about developing critical thinking, creativity, and a passion for lifelong learning.',
      },
      {
        title: 'Trophy',
        image: '/images/sliders/slide-2.jpg',
        text:
          'Our mission is to empower children to face the challenges and opportunities of the 21st century by providing a well-rounded education that includes academic, social, and emotional development. We aim to cultivate a culture of curiosity, inquiry, and collaboration that prepares our students to be responsible global citizens.',
      },
      {
        title: 'Students and Principal 2',
        image: '/images/sliders/slide-3.jpg',
        text:
          'Through our work, we hope to inspire a new generation of children who are confident, resilient, and empowered to pursue their dreams and make a positive impact in the world.',
      },
      {
        title: 'Students and Principal 3',
        image: '/images/sliders/slide-4.jpg',
        text:
          'At Schield Center, we are committed to providing quality education to every child, regardless of their background or financial situation. However, many children in Kajiado face significant barriers to education, including poverty, limited access to schools, and cultural beliefs that prioritize traditional practices over formal education.',
      },
      {
        title: 'Students and Principal 4',
        image: '/images/sliders/slide-5.jpg',
        text:
          'To overcome these challenges, Schield Center relies on the generous support of sponsors who share our vision and values. With their help, we are able to provide scholarships, uniforms, books, and other school supplies to hundreds of children each year. We also work closely with local schools and communities to identify the most vulnerable children and provide them with the resources they need to thrive.',
      },
    ],
    []
  );

  const events: Event[] = useMemo(
    () => [
      {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },
      {
        title: 'Sports Day',
        start: new Date(2023, 0, 5),
        end: new Date(2023, 0, 7),
        desc: 'Annual sports event showcasing students’ talents.',
      },
      {
        title: 'Science Fair',
        start: new Date(2023, 2, 15),
        end: new Date(2023, 2, 17),
        desc: 'Students present their scientific projects.',
      },
      {
        title: 'Parent-Teacher Meeting',
        start: new Date(2023, 4, 10),
        end: new Date(2023, 4, 12),
        desc: 'Discussing students’ progress with parents.',
      },
      {
        title: 'Art Exhibition',
        start: new Date(2023, 6, 20),
        end: new Date(2023, 6, 22),
        desc: 'Showcasing students’ artistic talents.',
      },
    ],
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-back',
      delay: 200,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 opacity-40"></div>

      <Slider
        autoplay
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        className="w-full h-full mb-8 relative z-10"
        swipeToSlide
        draggable
      >
        {carouselData.map((item, index) => (
          <div key={index} className="relative focus:outline-none">
            <div
              className="h-full w-full absolute inset-0 bg-cover bg-center transition duration-500 ease-in-out transform hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40 transition duration-500 ease-in-out transform hover:scale-105"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center z-10" data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-4 animate__animated animate__bounce">
                  {item.title}
                </h2>
                <p className="text-lg animate__animated animate__bounce">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="max-w-3xl px-4 mt-8 z-10">
        <h2 className="text-3xl font-bold mb-4 text-white" data-aos="fade-up">
          Upcoming Events
        </h2>
        <ul className="list-disc text-white">
          {events.map((event, index) => (
            <li key={index} className="mb-4" data-aos="fade-up">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>
                {event.start.toLocaleDateString()} - {event.end.toLocaleDateString()}
              </p>
              <p>{event.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
