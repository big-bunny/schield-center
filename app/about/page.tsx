"use client";

import { useState } from 'react';
// Import necessary dependencies...

const AboutPage = () => {
  const [currentImage, setCurrentImage] = useState('/images/gallery/pat.jpeg');
  const patriciaPdf = '/pdf/team/Pat.pdf';

  const [showOverflow, setShowOverflow] = useState(false);

  const handleLearnMore = () => {
    setShowOverflow(true);
  };

  const handleImageClick = () => {
    window.open(patriciaPdf, '_blank');
  };

  return (
    <>
      <div id="about" className="rounded-lg mt-0 text-gray-700 my-8">
        <div className="container mx-auto px-8 py-10">
          <h1 className="text-4xl p-3 font-extrabold bg-gradient-to-r from-green-500 rounded-full mb-8 text-white">
            ABOUT SCHIELD CENTRE
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/10 flex">
              <div
                className="min-h-screen bg-fixed rounded-lg bg-no-repeat bg-cover bg-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${currentImage}')`, flex: '30%' }}
                onClick={handleImageClick}
              >
                <div className="h-full w-full opacity-0 hover:opacity-100">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-bold">View Patricia`s PDF</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/10 px-4 border-red-500 py-8 lg:py-0">
              <div className="text-3xl bg-white text-gray-900 text-center py-10 overflow-hidden">
                <h1 className="text-4xl bold text-white">HISTORY</h1>
                <p>
                  Schield Center is a school located in Kajiado, officially established in 2008 by Patricia Schield,
                  an American woman who made a courageous decision. Patricia sold everything she owned and utilized her
                  inheritance to initiate the school. Tragically, Patricia passed away in 2008 before witnessing her dreams
                  come to fruition. Feeling like she had failed, Patricia`s dying wish to Joseph Mboya was to establish the
                  school through trustees and fundraising efforts.
                </p>
                {showOverflow && (
                  <>
                    <p>
                      Additional text line 1
                    </p>
                    <p>
                      Additional text line 2
                    </p>
                    {/* Add more lines as needed */}
                  </>
                )}
              </div>

              <div className="text-center py-4">
                {!showOverflow && (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                    onClick={handleLearnMore}
                  >
                    Learn More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
