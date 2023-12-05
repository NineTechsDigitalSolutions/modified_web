import React from 'react';

import { religious } from '../../../assets';

const ReligiousSection = () => {
  return (
    <div className='text-center py-10 bg-pinkBg'>
      <div className='container mx-auto'>
      <div className='row justify-content-center text-center mb-5'>
          <div >
            <h2 className='text-4xl section-heading'>  <br />Religious Section</h2>
          </div>
      </div>
        <div className='py-10'>
          <div className='lg:flex gap-10 flex-row-reverse'>
            <div className='flex-[0_0_50%] lg:max-w-[50%]  rounded-md  transition ease-in-out delay-200 hover:rounded-lg hover:-translate-y-1 hover:scale-110  duration-300 ... '>
              
              <img src={religious} alt='' />
              


            </div>
            <div className='flex-[0_0_50%] lg:max-w-[50%] flex items-center'>
              <p>
                When any user login to my library, they can access the religious
                section. Large number of e books and audio books are availble to
                elimate your beauty! This contains books belongs to different religions.
              </p>
            </div>
            
          </div>
          <hr 
    className="gradient"
    
      />
        </div>
      </div>
    </div>
    
  );
};

export default ReligiousSection;
