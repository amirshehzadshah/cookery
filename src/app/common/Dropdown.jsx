import Link from 'next/link';
import React from 'react';

const Dropdown = ({ items, onSelect }) => {
  return (
    <ul className="absolute shadow-lg mt-2">
      {items.map((item) => (
        <li key={item.id} className="px-4 py-2 bg-white hover:bg-gray-200 first:rounded-t last:rounded-b cursor-pointer" onClick={onSelect}>
          <Link href={`/portfolio/${item.id}`} className="text-gray-800">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
