"use client"
// Dashboard.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

// Define types for carousel items and events
type CarouselItem = {
  title: string;
  image: string;
  text: string;
};

type Event = {
  title: string;
  start: Date;
  end: Date;
  desc: string;
};

const Dashboard: React.FC = () => {
  const [currentCarousel, setCurrentCarousel] = useState<CarouselItem | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const carouselData: CarouselItem[] = useMemo(
    () => [
      {
        title: 'Students and Principal',
        image: 'images/sliders/slide-1.jpg',
        text:
          'At Schield Center, we strive to create a nurturing learning environment that values diversity and inclusivity. We believe that education is not just about acquiring knowledge and skills, but also about developing critical thinking, creativity, and a passion for lifelong learning.',
      },
      {
        title: 'Trophy',
        image: 'images/sliders/slide-2.jpg',
        text:
          'Our mission is to empower children to face the challenges and opportunities of the 21st century by providing a well-rounded education that includes academic, social, and emotional development. We aim to cultivate a culture of curiosity, inquiry, and collaboration that prepares our students to be responsible global citizens.',
      },
      {
        title: 'Students and Principal 2',
        image: 'images/sliders/slide-3.jpg',
        text:
          'Through our work, we hope to inspire a new generation of children who are confident, resilient, and empowered to pursue their dreams and make a positive impact in the world.',
      },
      {
        title: 'Students and Principal 3',
        image: 'images/sliders/slide-4.jpg',
        text:
          'At Schield Center, we are committed to providing quality education to every child, regardless of their background or financial situation. However, many children in Kajiado face significant barriers to education, including poverty, limited access to schools, and cultural beliefs that prioritize traditional practices over formal education.',
      },
      {
        title: 'Students and Principal 4',
        image: 'images/sliders/slide-5.jpg',
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
    let i = 0;
    const interval = setInterval(() => {
      setCurrentCarousel(carouselData[i]);
      i = (i + 1) % carouselData.length;
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData]);

  const closeModal = () => {
    setSelectedEvent(null);
    setSelectedDate(null);
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setSelectedDate(event.start);
  };

  const eventStyleGetter = (event: Event, start: Date, end: Date, isSelected: boolean) => {
    const style = {
      backgroundColor: isSelected ? 'lightblue' : event.desc === 'important' ? 'red' : 'green',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    };
    return {
      style,
    };
  };

  const MyCalendar = (props: any) => (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{
        height: '350px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      eventPropGetter={eventStyleGetter}
      onSelectEvent={handleEventClick}
      {...props}
    />
  );

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl p-3 text-white font-extrabold bg-gradient-to-r from-green-500 rounded-full mb-8">
        Welcome to Schield Centre Dashboard
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 mb-8 md:mr-8">
          {/* Mission Statement */}
          <div className="scrolling-text mb-4 text-center bg-white rounded-3xl p-6">
            <h3 className="text-2xl text-red-500">Mission Statement</h3>
            <p className="text-xl p-2 text-gray-800">Your Mission Statement content here...</p>
          </div>

          {/* Image Slider */}
          <div className="mb-4">
            <div
              className="min-h-screen bg-fixed rounded-lg bg-no-repeat bg-cover bg-center relative"
              style={{ backgroundImage: `url('${currentCarousel?.image}')` }}
            >
              <div className="absolute inset-0 bg-green-500 bg-opacity-25 px-4 py-8 md:px-12 rounded-3xl shadow-md border border-red-500">
                <div className="text-2xl font-extrabold text-black leading-relaxed">
                  <p className="text-black text-4xl">{currentCarousel?.text}</p>
                </div>  
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="scrolling-text mb-4 bg-white text-center rounded-3xl p-6">
            <h3 className="text-2xl text-red-500">Vision Statement</h3>
            <p className="text-xl p-2 text-gray-800">Your Vision Statement content here...</p>
          </div>
        </div>

        {/* Sidebar with Information, Calendar, and Upcoming Events */}
        <div className="w-full md:w-1/4">
          {/* Information */}
          <div className="bg-white rounded-lg p-4 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Important Information</h2>
            <ul className="list-disc pl-4">
              <li className="mb-2">Total Students: 210</li>
              <li className="mb-2">Total Teachers: 14</li>
            </ul>
          </div>

          {/* Recent Activities Calendar */}
          <div className="backdrop-blur-3xl  rounded-lg p-4 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Activities</h2>
            <MyCalendar />
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
            <ul>
              {events.map((event, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => handleEventClick(event)}
                >
                  {event.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <div className="modal bg-white p-4 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedEvent.title}</h2>
          <p className="text-gray-700">{selectedEvent.desc}</p>
          <p className="text-gray-700">{selectedDate && moment(selectedDate).format('MMMM Do YYYY')}</p>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

