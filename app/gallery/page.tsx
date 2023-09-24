"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  type: 'image' | 'video' | 'youtube';
  url: string;
  album: string;
  videoUrl?: string;
}


const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    url: '/images/gallery/community/constryction/preprimaryconstruction2020duringcovidclosure/community1.jpg',
    album: 'Covid',
  },
  {
    id: 2,
    type: 'image',
    url: '/images/gallery/community/constryction/preprimaryconstruction2020duringcovidclosure/community2.jpg',
    album: 'Covid',
  },
  {
    id: 3,
    type: 'image',
    url: '/images/gallery/community/constryction/preprimaryconstruction2020duringcovidclosure/community3.jpg',
    album: 'Covid',
  },
  {
    id: 4,
    type: 'image',
    url: '/images/gallery/community/constryction/preprimaryconstruction2020duringcovidclosure/community4.jpg',
    album: 'Covid',
  },
  {
    id: 5,
    type: 'image',
    url: '/images/gallery/community/constryction/preprimaryconstruction2020duringcovidclosure/community5.jpg',
    album: 'Covid',
  },
  {
    id: 1,
    type: 'image',
    url: '/images/gallery/community/constryction/preprimaryconstruction2020duringcovidclosure/social-distance.jpg',
    album: 'Covid',
  },
  
  {
    id: 15,
    type: 'image',
    url: '/images/gallery/community/Fahion show.JPG',
    album: 'Graduation',
  },
  {
    id: 16,
    type: 'image',
    url: '/images/gallery/community/graduation1.JPG',
    album: 'Graduation',
  },
  {
    id: 17,
    type: 'image',
    url: '/images/gallery/community/graduation2.JPG',
    album: 'Graduation',
  },
  {
    id: 18,
    type: 'image',
    url: '/images/gallery/community/graduation3.JPG',
    album: 'Graduation',
  },
  {
    id: 19,
    type: 'image',
    url: '/images/gallery/community/graduation4.JPG',
    album: 'Graduation',
  },
  {
    id: 20,
    type: 'image',
    url: '/images/gallery/community/graduation5.JPG',
    album: 'Graduation',
  },
  {
    id: 21,
    type: 'image',
    url: '/images/gallery/community/graduation6.JPG',
    album: 'Graduation',
  },
  {
    id: 22,
    type: 'image',
    url: '/images/gallery/community/graduation7.JPG',
    album: 'Graduation',
  },
  {
    id: 23,
    type: 'image',
    url: '/images/gallery/community/graduation8.jpg',
    album: 'Graduation',
  },
  {
    id: 24,
    type: 'image',
    url: '/images/gallery/community/graduation9.JPG',
    album: 'Graduation',
  },
  {
    id: 8,
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=rXSXbryBbh8',
    album: 'YouTube Album',
  },
  {
    id: 9,
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=zmTFzMXKHR8',
    album: 'YouTube Album',
  },
  {
    id: 10,
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=ANfUg7aEbPI',
    album: 'YouTube Album',
  },
  {
    id: 11,
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=p3tQDKkvbS8',
    album: 'YouTube Album',
  },
  {
    id: 12,
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=oJyTmc9jdLw',
    album: 'YouTube Album',
  },
  {
    id: 13,
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=Moyyh05Vr7M',
    album: 'YouTube Album',
  },
 
  {
    id: 7,
    type: 'video',
    url: '/videos/video_thumbnail.jpg',
    album: 'Video Album',
    videoUrl: '/videos/video1.mp4',
  },
 {
    id: 25,
    type: 'image',
    url: '/images/gallery/community/judy219.JPG',
    album: '2019',
  }, 
  {
    id: 26,
    type: 'image',
    url: '/images/gallery/community/monkeybars.JPG',
    album: '2019',
  },
  {
    id: 27,
    type: 'image',
    url: '/images/gallery/community/agric1.JPG',
    album: '2019',
  },
    {
    id: 28,
    type: 'image',
    url: '/images/gallery/community/agric2.JPG',
    album: '2019',
  },
    {
    id: 29,
    type: 'image',
    url: '/images/gallery/community/agric3.JPG',
    album: '2019',
  },
     {
    id: 30,
    type: 'image',
    url: '/images/gallery/community/pe1.JPG',
    album: 'Physical Ed',
  },
      {
    id: 31,
    type: 'image',
    url: '/images/gallery/community/pe2.JPG',
    album: 'Physical Ed',
  },
    {
    id: 35,
    type: 'image',
    url: '/images/gallery/community/pracs.JPG',
    album: 'Practicals',
  },
     {
    id: 32,
    type: 'image',
    url: '/images/gallery/community/pe3.JPG',
    album: 'Physical Ed',
  },
   {
    id: 32,
    type: 'image',
    url: '/images/gallery/community/pe4.JPG',
    album: 'Physical Ed',
  },
   {
    id: 33,
    type: 'image',
    url: '/images/gallery/community/firstaid1.JPG',
    album: 'First AID',
  },
   {
    id: 34,
    type: 'image',
    url: '/images/gallery/community/firstaid2.JPG',
    album: 'First AID',
  },

  // Add more gallery items as needed
];

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const albums = Array.from(new Set(galleryItems.map((item) => item.album)));


  const openModal = (item: GalleryItem) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getYoutubeVideoId = (url: string): string => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([a-zA-Z0-9\-_]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  return (
    <>
        <div className="min-h-screen">
          <main className="max-w-4xl mx-auto py-8">
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-500 rounded-full p-4">Gallery</h1>

            {albums.map((album) => (
              <section key={album} className="mb-8">
                <h2 className="text-2xl   text-white font-extrabold mb-4">{album}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryItems
                    .filter((item) => item.album === album)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="backdrop-blur-2xl rounded-2xl items-center shadow p-6 cursor-pointer hover:shadow-lg transition duration-300"
                        onClick={() => openModal(item)}
                      >
                        {item.type === 'image' && (
                          <Image src={item.url} alt={`Image ${item.id}`} width={400} height={300} />
                        )}
                        {item.type === 'video' && (
                          <div className="relative w-full">
                            <video src={item.videoUrl} controls className="w-full h-auto">
                              Sorry, your browser doesn&apos;t support embedded videos.
                            </video>
                          </div>
                        )}
                        {item.type === 'youtube' && (
                          <div className="relative w-full">
                            <iframe
                              src={`https://www.youtube.com/embed/${getYoutubeVideoId(item.url)}`}
                              title="YouTube Video"
                              className="w-full h-auto"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </section>
            ))}
          </main>
        </div>

        {selectedMedia && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div ref={modalRef} className="relative bg-white rounded shadow-lg">
              <button
                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {selectedMedia.type === 'image' && (
                <Image
                  src={selectedMedia.url}
                  alt={`Image ${selectedMedia.id}`}
                  width={800}
                  height={600}
                />
              )}
              {selectedMedia.type === 'video' && (
                <div className="relative w-full">
                  <video src={selectedMedia.videoUrl} controls className="w-full h-auto">
                    Sorry, your browser doesn&apos;t support embedded videos.
                  </video>
                </div>
              )}
              {selectedMedia.type === 'youtube' && (
                <div className="relative w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(selectedMedia.url)}`}
                    title="YouTube Video"
                    className="w-full h-auto"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        )}
    </>
  );
};

export default Gallery;
