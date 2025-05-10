import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: assets.header_img,
    text: "Connect with Expert Doctors Anytime, Anywhere",
    profile: assets.group_profiles,
    description: "Discover top-rated healthcare professionals and book appointments effortlessly with CureConnect.",
    points: ["24/7 Availability", "Trusted Specialists", "Easy Online Booking"]
  },
  {
    image: assets.carousel_img1,
    text: "Book Appointments with Ease",
    profile: assets.carousel_profile1,
    description: "Find the best specialists for your needs with just a few clicks.",
    points: ["Quick Scheduling", "Hassle-Free Consultations", "Personalized Care"]
  },
  {
    image: assets.carousel_img2,
    text: "Top-Rated Healthcare Professionals",
    profile: assets.carousel_profile2,
    description: "Access trusted doctors and get expert medical advice anytime.",
    points: ["Verified Doctors", "Specialized Treatment", "Patient-Centered Care"]
  },
  {
    image: assets.carousel_img3,
    text: "Your Health, Our Priority",
    profile: assets.carousel_profile3,
    description: "Stay healthy with easy and quick online consultations.",
    points: ["Secure Consultations", "Health Monitoring", "Expert Guidance"]
  }
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className='flex flex-col md:flex-row bg-gray-500 rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden relative'>
      {/* Left Side (Carousel Text) */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:mb-[-30px] transition-all duration-700 ease-in-out'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight transition-opacity duration-700 ease-in-out'>
          {slides[currentIndex].text}
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light transition-opacity duration-700 ease-in-out'>
          <img className='w-28' src={slides[currentIndex].profile} alt='' />
          <p>{slides[currentIndex].description}</p>
        </div>
        <ul className='text-white text-sm list-disc pl-5 transition-opacity duration-700 ease-in-out'>
          {slides[currentIndex].points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <a
          href='#speciality'
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-10 hover:scale-105 transition-all duration-300'
        >
          Book your appointment <img className='w-3' src={assets.arrow_icon} alt='' />
        </a>
      </div>

      {/* Right Side (Carousel Image) */}
      <div className='md:w-1/2 relative flex items-end justify-end overflow-hidden transition-transform duration-700 ease-in-out'>
        <img
          className='w-full h-auto md:max-w-md lg:max-w-lg xl:max-w-xl object-contain object-bottom transition-opacity duration-700 ease-in-out'
          src={slides[currentIndex].image}
          alt='Doctors Banner'
        />
      </div>

      {/* Carousel Arrows */}
      <button onClick={prevSlide} className='absolute left-4 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md hover:bg-gray-200 transition-all'>
        <ChevronLeft className='w-6 h-6 text-gray-600' />
      </button>
      <button onClick={nextSlide} className='absolute right-4 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md hover:bg-gray-200 transition-all'>
        <ChevronRight className='w-6 h-6 text-gray-600' />
      </button>

      {/* Carousel Indicators */}
      <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3'>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-300 border-2 border-gray-300 ${currentIndex === index ? 'bg-gray-200 scale-150 shadow-lg border-white' : 'bg-gray-400 opacity-70 hover:opacity-100'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
