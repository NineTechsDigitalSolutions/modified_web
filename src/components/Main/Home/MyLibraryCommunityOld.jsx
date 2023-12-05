import React from 'react';

import {
  person1,
  person2,
  person3,
  person4,
  phone2,
  convercation,
} from '../../../assets';

const MyLibraryCommunity = () => {
  return (
    <div className='text-center '>
      <div className='container mx-auto'>
        <div className='flex gap-20'>
          <div className='flex-[0_0_40%] max-w-[40%]  py-10'>
         
            <div className='row justify-content-center text-center'>
          <div >
            <h2 className=' section-heading'>  <br />My Library Community</h2>
          </div>
      </div>
            <p className='my-10'>
              Once you download the mobile app you can join with your friends
              inside the community who are book bugs same as you. You can post,
              share and update about what your reading now, Really interesting!
            </p>
          </div>
          <div className='flex-[0_0_50%] max-w-[50%] mt-[-60px]'>
            <div className='lg:flex mx-auto justify-center'>
              <div className='flex  lg:mt-[-60px] lg:mb-[-100px] mb-[-50px] lg:py-0 py-5'>
                <img
                  src={phone2}
                  alt=''
                  className='lg:h-[500px] h-[300px] rotate-[10deg]  
                  transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ... '
                />
              </div>
              <div className='flex items-end lg:ml-[-400px]'>
                <img
                  src={convercation}
                  alt=''
                  className='lg:w-[200px] lg:h-[150px] w-[100px] z-10 '
                />
              </div>
            </div>
            <div className='flex mt-[-60px] lg:h-[200px] lg:ml-0 ml-[-320px] overflow-hidden '>
              <img src={person1} alt='' className='z-20 h-[200px]   
              transition ease-in-out delay-150 hover:shadow-md hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...       
              ' />
              <img src={person2} alt='' className='mx-[-70px] z-10 h-[200px]
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...
              ' />
              <img src={person3} alt='' className='z-20 h-[200px]
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...
              ' />
              <img src={person4} alt='' className='mx-[-70px] z-10 h-[200px]
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...
              ' />
                <img src={person1} alt='' className='z-20 h-[200px]  
                transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...        
              ' />
              <img src={person2} alt='' className='mx-[-70px] z-10 h-[200px]
              
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...        

              ' />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default MyLibraryCommunity;
