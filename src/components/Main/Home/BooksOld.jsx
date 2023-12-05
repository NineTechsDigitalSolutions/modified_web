import React, { useState, useEffect } from 'react';

import { books } from '../../../data';

const Books = () => {
  const [images, setImages] = useState(books);

  useEffect(() => {
    setImages(books);
  }, []);

  return (
    <div className='text-center py-10 '>
      <div className='container mx-auto'>
        <h2 className='text-5xl  text-[#529d96]
        transition ease-in-out delay-150 rounded-lg hover:font-bold hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...
        '>
          The Best E-Books and Audio Books are waiting
        </h2>

        <div className=' rounded-lg grid lg:grid-cols-7 grid-cols-3 books mt-10 bg-white p-10 blue-gradient  '>
          {images.map((image) => (
            <div key={image.id} className='book'>
              <img
                src={image.img}
                alt=''
                className='w-[]  lg:h-full h-[160px] hover:shadow-lg hover:rounded-lg rounded-md object-cover shadow-xl
                 hover:shadow-lg p-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
