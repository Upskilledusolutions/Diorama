import React, { useState, useEffect } from 'react';
import styles from '@/styles/Events/Events.module.css';
import Image from 'next/image';

// Sample data arrays (using your sampleRecentEvents for demonstration)
const sampleRecentEvents = [
  {
    id: 1,
    title: 'Art Workshop',
    date: '2025-03-15',
    description: 'A fun art workshop for kids to explore their creativity.',
    image: "/banners/19.jpg"
  },
  {
    id: 2,
    title: 'Science Fair',
    date: '2025-04-10',
    description: 'Explore amazing science experiments and demonstrations.',
    image: "/banners/19.jpg"
  },
  {
    id: 3,
    title: 'Book Reading',
    date: '2025-05-05',
    description: 'Interactive storytelling session with famous authors.',
    image: "/banners/19.jpg"
  },
  {
    id: 4,
    title: 'Music Concert',
    date: '2025-06-20',
    description: 'Live performances by a talented kids band.',
    image: "/banners/19.jpg"
  },
  {
    id: 5,
    title: 'Dance Competition',
    date: '2025-07-15',
    description: 'Competitive dance event filled with energy and fun.',
    image: "/banners/19.jpg"
  }
];

const sampleUpcomingEvents = [
    {
      id: 6,
      title: 'Drama Workshop',
      date: '2025-08-10',
      description: 'Learn acting and stage performance in a fun workshop.',
      image: "/banners/19.jpg"
    },
    {
      id: 7,
      title: 'Coding Camp',
      date: '2025-09-05',
      description: 'Kids learn the basics of coding in a playful environment.',
      image: "/banners/19.jpg"
    },
    {
      id: 8,
      title: 'Photography Class',
      date: '2025-10-20',
      description: 'Discover the art of photography and creative composition.',
      image: "/banners/19.jpg"
    },
    {
      id: 9,
      title: 'Cooking Workshop',
      date: '2025-11-11',
      description: 'Learn to cook healthy and fun meals in this workshop.',
      image: "/banners/19.jpg"
    },
    {
      id: 10,
      title: 'Robotics Exhibition',
      date: '2025-12-01',
      description: 'Interactive demos and robotics projects on display.',
      image: "/banners/19.jpg"
    }
  ];
  
  const sampleHighlights = [
    {
      id: 11,
      title: 'Annual Sports Day',
      date: '2025-02-15',
      description: 'Highlights and memorable moments from our sports day.',
      image: "/banners/19.jpg"
    },
    {
      id: 12,
      title: 'Art & Craft Fest',
      date: '2025-03-10',
      description: 'Best moments from our annual art and craft festival.',
      image: "/banners/19.jpg"
    },
    {
      id: 13,
      title: 'Science Expo',
      date: '2025-04-22',
      description: 'Innovative experiments and projects that amazed everyone.',
      image: "/banners/19.jpg"
    },
    {
      id: 14,
      title: 'Literature Carnival',
      date: '2025-05-18',
      description: 'Engaging literature events and creative workshops.',
      image: "/banners/19.jpg"
    },
    {
      id: 15,
      title: 'Music Fiesta',
      date: '2025-06-30',
      description: 'A day full of music, dance, and fun performances.',
      image: "/banners/19.jpg"
    }
  ];

// Slider component for a given section
const EventSlider = ({ events, sectionTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Update visibleCards based on viewport width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const totalCards = events.length;
  const maxIndex = totalCards - visibleCards; // e.g., if 5 cards and 3 visible, maxIndex = 2

  // Calculate the shift percentage
  // Since each card is (100 / visibleCards)% of the track, shifting by one card equals that percentage.
  const shiftPercent = (100 / visibleCards) * currentIndex;

  const next = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className={styles.sliderSection}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.arrow} onClick={prev}>&lt;</button>
        <div className={styles.sliderViewport}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${shiftPercent}%)` }}
          >
            {events.map((event) => (
              <div key={event.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                  className={styles.img}
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={200}
                    objectFit="cover"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{event.title}</h3>
                  <p className={styles.cardDate}>{event.date}</p>
                  <p className={styles.cardDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.arrow} onClick={next}>&gt;</button>
      </div>
    </div>
  );
};

export default function EventsPage() {
  return (
    <div className={styles.bcont}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <Image
          className={styles.squirrel}
          src={"/banners/19.jpg"}
          width={400}
          height={400}
          alt="Banner"
        />
        <div className={styles.content}>
          <div className={styles.heading}>Events</div>
          <div className={styles.text}>
            We help children engage through fun and educational Magazines.
          </div>
        </div>
      </div>

      {/* Recent Events Section */}
      <EventSlider events={sampleRecentEvents} sectionTitle="Recent Events" />

      {/* Upcoming Events Section */}
      <EventSlider events={sampleUpcomingEvents} sectionTitle="Upcoming Events" />

      {/* Event Highlights Section */}
      <EventSlider events={sampleHighlights} sectionTitle="Event Highlights" />
    </div>
  );
}
