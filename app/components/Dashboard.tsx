import React from 'react';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100 mx-auto max-w-screen-lg">

      <h1 className="text-2xl md:text-4xl p-3 text-white font-extrabold bg-gradient-to-r from-green-500 rounded-full mb-8">
        Welcome to Schield Centre Dashboard
      </h1>

      <div className="flex flex-col md:flex-row">

        {/* Left section */}
        <div className="md:w-1/2 md:mr-8">
          {/* Mission Statement */}
          <div className="scrolling-text mb-4 text-center bg-white rounded-3xl p-4">
            <h3 className="text-base md:text-lg lg:text-xl text-red-500">Mission Statement</h3>
            <p className="text-xs md:text-base lg:text-lg p-2 text-black">
              Our mission is to provide access to quality education to children in Kajiado, Kenya, with the aim of empowering them to break the cycle of poverty and improve their lives and those of their families. We strive to create a learning environment that is supportive, inclusive, and empowering, valuing diversity and embracing the unique cultural heritage of our community.
            </p>
          </div>

          {/* Centered image */}
          <div className="flex justify-center mb-8">
            <p className="text-xs md:text-lg lg:text-xl text-white mb-4 md:mb-0">This image will be replaced with one of the late Schield`s</p>

            <Image
              src="/images/gallery/construction.jpg"
              alt="Centered Image"
              width={300}
              height={200}
              className="w-full rounded-lg animate-bounce"
            />
          </div>

          {/* Vision Statement */}
          <div className="scrolling-text mb-4 bg-white text-center rounded-3xl p-4">
            <h3 className="text-base md:text-lg lg:text-xl text-red-500">Vision Statement</h3>
            <p className="text-xs md:text-base lg:text-lg p-2 text-black">
              Our vision is a world where every child has access to quality education and the opportunity to reach their full potential. We believe that education is a fundamental human right and that it is essential for creating a more just and equitable society. At our center, we believe in fostering a culture of curiosity, creativity, and critical thinking, while also imparting life skills and values such as hard work, honesty, and respect for diversity. Our vision is to inspire and empower the next generation of global citizens who will make a positive impact on the world.
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="md:w-1/2 md:mt-0 mt-8">
          {/* Display important information */}
          <div className="bg-white rounded-lg p-4 mb-8">
            <h2 className="text-xs md:text-base lg:text-lg font-bold mb-4">Important Information</h2>
            <ul className="text-xs md:text-sm lg:text-base">
              <li className="mb-2">Total Students: 210</li>
              <li className="mb-2">Total Teachers: 14</li>
            </ul>
          </div>

          {/* Display recent activities */}
          <div className="bg-white rounded-lg p-4 mb-8">
            <h2 className="text-xs md:text-base lg:text-lg font-bold mb-4">Recent Activities</h2>
            <ul className="text-xs md:text-sm lg:text-base">
              <li className="mb-2">Trip to Court</li>
              <li className="mb-2">Sports Day</li>
            </ul>
          </div>

          {/* Live Calendar */}
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-xs md:text-base lg:text-lg font-bold mb-4">Upcoming Events</h2>
            <p className="text-xs md:text-sm lg:text-base">
              This section will display a live calendar of upcoming events at the Schield Centre.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
