import { brands } from '@/data/brands';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  console.log(brands)
  return (
    <div className="flex justify-center w-full">
      <div className="flex max-sm:flex-col items-center justify-between w-full p-4">
        {brands.map((item) => (
          <div key={item.id} className="relative w-full">
            <div
              className="absolute inset-0 h-[85vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.img})`,
                filter: 'blur(3px)',
              }}
            ></div>
            <div className="relative flex justify-center items-center h-[85vh] border bg-opacity-70">
              <Link href={item.href} className="flex items-center justify-center">
                <Image src={item.logo} alt={`Logo for ${item.title}`} width={350} height={350} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
