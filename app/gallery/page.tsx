"use client"
// Gallery.tsx
import React, { useState } from 'react';
import Image from 'next/image';

// Media type enumeration
enum MediaType {
  Image = 'image',
  Video = 'video',
  Youtube = 'youtube',
}

// Gallery item interface
interface GalleryItem {
  id: number;
  type: MediaType;
  url: string;
  album: string;
  videoUrl?: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: MediaType.Image,
    url: '/images/gallery/community/construction/preprimaryconstruction2020duringcovidclosure/community1.jpg',
    album: 'Covid',
    date: '2023-11-01',
  },
  {
    id: 2,
    type: MediaType.Image,
    url: '/images/gallery/community/construction/preprimaryconstruction2020duringcovidclosure/community2.jpg',
    album: 'Covid',
    date: '2023-11-02',
  },
  {
    id: 3,
    type: MediaType.Image,
    url: '/images/gallery/community/construction/preprimaryconstruction2020duringcovidclosure/community3.jpg',
    album: 'Covid',
    date: '2023-11-03',
  },
  {
    id: 4,
    type: MediaType.Image,
    url: '/images/gallery/community/construction/preprimaryconstruction2020duringcovidclosure/community4.jpg',
    album: 'Covid',
    date: '2023-11-04',
  },
  {
    id: 5,
    type: MediaType.Image,
    url: '/images/gallery/community/construction/preprimaryconstruction2020duringcovidclosure/community5.jpg',
    album: 'Covid',
    date: '2023-11-05',
  },
  {
    id: 1,
    type: MediaType.Image,
    url: '/images/gallery/community/construction/preprimaryconstruction2020duringcovidclosure/social-distance.jpg',
    album: 'Covid',
    date: '2023-11-06',
  },
  {
    id: 15,
    type: MediaType.Image,
    url: '/images/gallery/community/Fahion show.JPG',
    album: 'Graduation',
    date: '2023-11-07',
  },
  {
    id: 16,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation1.JPG',
    album: 'Graduation',
    date: '2023-11-08',
  },
  {
    id: 17,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation2.JPG',
    album: 'Graduation',
    date: '2023-11-09',
  },
  {
    id: 18,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation3.JPG',
    album: 'Graduation',
    date: '2023-11-10',
  },
  {
    id: 19,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation4.JPG',
    album: 'Graduation',
    date: '2023-11-11',
  },
  {
    id: 20,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation5.JPG',
    album: 'Graduation',
    date: '2023-11-12',
  },
  {
    id: 21,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation6.JPG',
    album: 'Graduation',
    date: '2023-11-13',
  },
  {
    id: 22,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation7.JPG',
    album: 'Graduation',
    date: '2023-11-14',
  },
  {
    id: 23,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation8.jpg',
    album: 'Graduation',
    date: '2023-11-15',
  },
  {
    id: 24,
    type: MediaType.Image,
    url: '/images/gallery/community/graduation9.JPG',
    album: 'Graduation',
    date: '2023-11-16',
  },
  {
    id: 8,
    type: MediaType.Youtube,
    url: 'https://www.youtube.com/watch?v=rXSXbryBbh8',
    album: 'YouTube Album',
    date: '2023-11-17',
  },
  {
    id: 9,
    type: MediaType.Youtube,
    url: 'https://www.youtube.com/watch?v=zmTFzMXKHR8',
    album: 'YouTube Album',
    date: '2023-11-18',
  },
  {
    id: 10,
    type: MediaType.Youtube,
    url: 'https://www.youtube.com/watch?v=ANfUg7aEbPI',
    album: 'YouTube Album',
    date: '2023-11-19',
  },
  {
    id: 11,
    type: MediaType.Youtube,
    url: 'https://www.youtube.com/watch?v=p3tQDKkvbS8',
    album: 'YouTube Album',
    date: '2023-11-20',
  },
  {
    id: 12,
    type: MediaType.Youtube,
    url: 'https://www.youtube.com/watch?v=oJyTmc9jdLw',
    album: 'YouTube Album',
    date: '2023-11-21',
  },
  {
    id: 13,
    type: MediaType.Youtube,
    url: 'https://www.youtube.com/watch?v=Moyyh05Vr7M',
    album: 'YouTube Album',
    date: '2023-11-22',
  },
  {
    id: 7,
    type: MediaType.Video,
    url: '/videos/video_thumbnail.jpg',
    album: 'Video Album',
    videoUrl: '/videos/video1.mp4',
    date: '2023-11-23',
  },
  {
    id: 25,
    type: MediaType.Image,
    url: '/images/gallery/community/judy219.JPG',
    album: '2019',
    date: '2019-01-01',
  },
  {
    id: 26,
    type: MediaType.Image,
    url: '/images/gallery/community/monkeybars.JPG',
    album: '2019',
    date: '2019-01-02',
  },
  {
    id: 27,
    type: MediaType.Image,
    url: '/images/gallery/community/agric1.JPG',
    album: '2019',
    date: '2019-01-03',
  },
  {
    id: 28,
    type: MediaType.Image,
    url: '/images/gallery/community/agric2.JPG',
    album: '2019',
    date: '2019-01-04',
  },
  {
    id: 29,
    type: MediaType.Image,
    url: '/images/gallery/community/agric3.JPG',
    album: '2019',
    date: '2019-01-05',
  },
  {
    id: 30,
    type: MediaType.Image,
    url: '/images/gallery/community/pe1.JPG',
    album: 'Physical Ed',
    date: '2019-01-06',
  },
  {
    id: 31,
    type: MediaType.Image,
    url: '/images/gallery/community/pe2.JPG',
    album: 'Physical Ed',
    date: '2019-01-07',
  },
  {
    id: 35,
    type: MediaType.Image,
    url: '/images/gallery/community/pracs.JPG',
    album: 'Practicals',
    date: '2019-01-08',
  },
  {
    id: 32,
    type: MediaType.Image,
    url: '/images/gallery/community/pe3.JPG',
    album: 'Physical Ed',
    date: '2019-01-09',
  },
  {
    id: 32,
    type: MediaType.Image,
    url: '/images/gallery/community/pe4.JPG',
    album: 'Physical Ed',
    date: '2019-01-10',
  },
  {
    id: 33,
    type: MediaType.Image,
    url: '/images/gallery/community/firstaid1.JPG',
    album: 'First AID',
    date: '2019-01-11',
  },
  {
    id: 34,
    type: MediaType.Image,
    url: '/images/gallery/community/firstaid2.JPG',
    album: 'First AID',
    date: '2019-01-12',
  },
  // Add more gallery items as needed
];


// GalleryItem component
const GalleryItem: React.FC<{ item: GalleryItem; openModal: (item: GalleryItem) => void }> = ({ item, openModal }) => {
  const getYoutubeVideoId = (url: string): string => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([a-zA-Z0-9\-_]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  const handleClick = () => {
    openModal(item);
  };

  return (
    <div
      key={item.id}
      className="backdrop-blur-2xl rounded-2xl items-center shadow p-6 cursor-pointer hover:shadow-lg transition duration-300"
      onClick={handleClick}
    >
      {item.type === MediaType.Image && (
        <Image src={item.url} alt={`Image ${item.id}`} width={400} height={300} />
      )}
      {item.type === MediaType.Video && (
        <div className="relative w-full">
          <video src={item.videoUrl} controls className="w-full h-auto">
            Sorry, your browser doesn&apos;t support embedded videos.
          </video>
        </div>
      )}
      {item.type === MediaType.Youtube && (
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
  );
};

// MediaViewer component (replace this with your actual implementation)
interface MediaViewerProps {
  media: GalleryItem;
  onClose: () => void;
}

const MediaViewer: React.FC<MediaViewerProps> = ({ media, onClose }) => {
  // Implement your media viewer UI here based on the selected media
  return (
    <div>
      <h2>{media.album}</h2>
      {/* Add rendering logic based on media type (Image, Video, Youtube) */}
      {/* Add a close button or overlay to close the media viewer */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

// GallerySection component
const GallerySection: React.FC<{
  album: string;
  items: GalleryItem[];
  activeTab: MediaType;
  openModal: (item: GalleryItem) => void;
}> = ({ album, items, activeTab, openModal }) => {
  const filteredItems = items.filter(
    (item) =>
      item.album === album &&
      ((activeTab === MediaType.Image && item.type === MediaType.Image) ||
        (activeTab === MediaType.Video &&
          (item.type === MediaType.Video || item.type === MediaType.Youtube)))
  );

  // Show the section only if there are items to display
  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <section key={album} className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <GalleryItem key={item.id} item={item} openModal={openModal} />
        ))}
      </div>
    </section>
  );
};

// Gallery component
const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [activeTab, setActiveTab] = useState<MediaType>(MediaType.Image);

  const openModal = (item: GalleryItem) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <div className="min-h-screen">
        <main className="max-w-4xl mx-auto py-8">
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-500 rounded-full p-4">Gallery</h1>

          <div className="flex mb-4">
            <button
              className={`mr-4 ${
                activeTab === MediaType.Image ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              } px-4 py-2 rounded`}
              onClick={() => setActiveTab(MediaType.Image)}
            >
              Images
            </button>
            <button
              className={`${
                activeTab === MediaType.Video ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              } px-4 py-2 rounded`}
              onClick={() => setActiveTab(MediaType.Video)}
            >
              Videos
            </button>
          </div>

          {Array.from(new Set(galleryItems.map((item) => item.album))).map((album) => (
            <GallerySection
              key={album}
              album={album}
              items={galleryItems}
              activeTab={activeTab}
              openModal={openModal}
            />
          ))}
        </main>
      </div>
      {/* Use a conditional rendering to show MediaViewer only when there is a selected media */}
      {selectedMedia && <MediaViewer media={selectedMedia} onClose={closeModal} />}
    </>
  );
};

export default Gallery;
