import React from 'react';

import { translator } from '../../../assets';

const Libraries = () => {
  return (
    <div className='text-center py-16 bg-slate-100'>
      <div className='container mx-auto'>
       
        <div >
            <h2 className=' section-heading'>  <br />Our Libraries</h2>
          </div>
          <br />
        <div className='lg:flex mt-10'>
          <div className='flex-[0_0_50%] lg:max-w-[50%] '>
            <img src={translator} alt='' className='mx-auto' />
          </div>
          <div className='flex-[0_0_50%] lg:max-w-[50%] mt-10 lg:mt-0 flex items-center'>
            <p>
              Two types of libraries, Sinhala and English are available within
              MyLibrary you can switch between two libraries easily, You can
              select Sinhala or English or both libraries when you signup.
            </p>
          </div>
        </div>
      </div>
      <hr 
    className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
    
      />
      
      
    </div>
  );
};

export default Libraries;
