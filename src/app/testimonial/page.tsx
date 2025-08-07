'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import clsx from 'clsx';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const speakers = [
  {
    name: 'Name Surname1',
    company: 'Company name example1',
    role: 'Role example1',
    image: 'https://images.prismic.io/responsiveio/Z9PywhsAHJWomiQc_Speaker_Image_KunalShrestha.png?auto=format,compress',
    videoUrl: 'https://player.vimeo.com/video/1038524506',
    testimonial: 'We were able to reduce the time maintaining our content library by 50%...',
  },
  {
    name: 'Name Surname2',
    company: 'Company name example2',
    role: 'Role example2',
    image: 'https://images.prismic.io/responsiveio/Z9PywRsAHJWomiQb_Speaker_Image_NeilShah.jpg?auto=format,compress',
    videoUrl: 'https://player.vimeo.com/video/1105881168',
    testimonial: 'This platform revolutionized our process...',
  },
  {
    name: 'Name Surname3',
    company: 'Company name example3',
    role: 'Role example3',
    image: 'https://images.prismic.io/responsiveio/Z9Px6xsAHJWomiPu_Speaker_Image_Shelby_Nadler.jpg?auto=format,compress',
    videoUrl: 'https://www.youtube.com/embed/fg5L0bjbDDw?si=gl82rxAD57gPzKQj',
    testimonial: 'Highly recommend this for any RFP process...',
  },
];

export default function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;

    const updateIndex = () => {
      setCurrent(api.selectedScrollSnap());
      setPlayingIndex(null); // Stop video on slide change
    };

    setCurrent(api.selectedScrollSnap());
    api.on('select', updateIndex);
  }, [api]);

  const activeSpeaker = speakers[current];

  return (
    <section className="w-full px-4 py-12 bg-white text-black">
      <div className="text-center mb-6 text-sm tracking-widest uppercase">Placeholder Text</div>
      <h2 className="text-center text-4xl font-semibold mb-12">The secret behind winning RFPs</h2>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {/* Speaker List */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              onClick={() => {
                api?.scrollTo(idx);
                setPlayingIndex(null); // Stop playing when changing manually
              }}
              className={clsx(
                'cursor-pointer px-4 py-2 border-t-4 transition-all duration-300',
                idx === current ? 'border-black pb-4 font-semibold' : 'border-transparent text-gray-400'
              )}
            >
              <p className="text-lg">{speaker.name}</p>
              <p className="text-sm">{speaker.company}</p>
              <p className="text-sm">{speaker.role}</p>
            </div>
          ))}
        </div>

        {/* Carousel Video */}
        <div className="relative w-full lg:w-1/2">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {speakers.map((speaker, idx) => (
                <CarouselItem key={idx} className="aspect-square relative">
                  {playingIndex === idx ? (
                    <iframe
                      src={speaker.videoUrl}
                      title={`Video of ${speaker.name}`}
                      className="w-full h-full rounded-md"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover rounded-md"
                      />
                      <button
                        onClick={() => setPlayingIndex(idx)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40"
                      >
                        <div className="bg-white text-black p-4 rounded-full hover:scale-105 transition-transform">
                          <Play className="w-6 h-6" />
                        </div>
                      </button>
                    </>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center items-center gap-4 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        {/* Testimonial */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-6 flex flex-col justify-between">
          <p className="text-lg font-medium mb-4">{activeSpeaker.testimonial}</p>
          <button className="bg-black text-white px-4 py-2 w-max hover:bg-gray-800">Read more</button>
        </div>
      </div>
    </section>
  );
}
