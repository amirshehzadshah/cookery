'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import { portfolio } from '@/data/portfolio';
import Image from 'next/image';

const Portfolio = () => {

  const router = useParams();
  const { id } = router;
  const portfolioItem = portfolio.find((item) => item.id === parseInt(id));

  if (!portfolioItem) return <p>Loading...</p>;

  return (
    <div className="bg-gray-50 text-gray-800 my-12 w-full">

      <section
        className="w-full flex items-center justify-center bg-cover bg-center text-white py-8 max-sm:px-4"
        style={{ backgroundImage: `url(${portfolioItem.topBannerImg})` }}
      >
        <div className='bg-black/5 backdrop-blur-sm max-w-4xl w-full rounded-lg pb-5 shadow-lg border border-white/20 mx-auto flex flex-col items-center'>
          <Image src={portfolioItem.logo} alt={`${portfolioItem.title} Logo`} width={150} height={150} />
          <h1 className="text-3xl font-bold text-center">{portfolioItem.topBanner}</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-8 px-4 flex flex-col items-center space-y-6">
        <h2 className='font-bold text-3xl m-4'>Who We Are</h2>
        <p className="text-lg text-center max-w-3xl">{portfolioItem.whoWeAre}</p>
      </section>

      <section className="max-w-xl mx-auto my-8 px-4">
        <video src={portfolioItem.video} controls className="w-full rounded-lg shadow-lg" />
      </section>

      <section className="max-w-4xl mx-auto py-8 px-4 text-center">
        <h2 className="font-bold text-3xl m-4">What We Do</h2>
        <p className="text-lg">{portfolioItem.whatWeDo}</p>
      </section>

      <section className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {portfolioItem.imgs.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Portfolio Image ${index + 1}`}
            width={300}
            height={200}
            className="size-full rounded-lg shadow-md"
          />
        ))}
      </section>

      <section
        className="w-full h-64 flex items-center justify-center bg-cover bg-center text-white text-center py-8"
        style={{ backgroundImage: `url(${portfolioItem.middleBannerImg})` }}
      >
      <div className='bg-black/5 backdrop-blur-sm max-w-4xl w-full rounded-lg p-5 shadow-lg border border-white/20 mx-auto flex flex-col items-center'>
          <h2 className="text-2xl font-semibold text-center">{portfolioItem.middleBanner}</h2>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="font-bold text-3xl text-center m-4">What Our Clients Say</h2>
        <div className="space-y-4">
          {portfolioItem.clientAboutUs.map((client) => (
            <div key={client.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold">{client.clientName}</h3>
              <p className="text-yellow-500">{"★".repeat(client.rate)}{"☆".repeat(5 - client.rate)}</p>
              <p className="italic">{client.review}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
