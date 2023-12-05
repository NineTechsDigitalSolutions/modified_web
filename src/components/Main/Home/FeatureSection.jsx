import React from 'react';
import { PiDevicesBold } from 'react-icons/pi';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FaCarSide } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

import { phone } from '../../../assets';

const FeatureSection = () => {
  return (
    <div className='container py-14 '>
        
      <div className='row items-center justify-center'>
      
        <div className='col-md-4 text-center
        
        '>
          <div className='mb-20
          transition ease-in-out delay-150    hover:-translate-y-1 hover:scale-110  duration-300 ...

          '>
            <PiDevicesBold
              fontSize={50}
              color='rgba(39,70,133,0.8)'
              className='mx-auto'
            />
            <h5 className='text-[#529d96]'>Read across devices</h5>
            <p>
             You can access digital materials with your mobile devices and tablets.
            </p>
          </div>

          <div className='mt-20
          transition ease-in-out delay-150    hover:-translate-y-1 hover:scale-110  duration-300 ...'>
            <AiOutlineCloudDownload
              fontSize={50}
              color='rgba(39,70,133,0.8)'
              className='mx-auto'
            />
            <h5 className='text-[#529d96]'>Access large number of materials</h5>
            <p>
              You will get access to large number of e books, audio books, e news papers and e magazines through mylibrary mobile app.
            </p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='circle w-full h-[400px] border-[15px] border-dotted border-[rgba(61,179,197,0.8)] rounded-full flex justify-center items-center'>
            <img src={phone} alt='' className='mx-auto w-[220px]' />
          </div>
        </div>
        <div className='col-md-4 text-center'>
          <div className='mb-20
          transition ease-in-out delay-150    hover:-translate-y-1 hover:scale-110  duration-300 ...'>
            <FaCarSide
              fontSize={50}
              color='rgba(39,70,133,0.8)'
              className='mx-auto'
            />
            <h5 className='text-[#529d96]'>Listen in your car</h5>
            <p>
              You can listen to English and Sinhala audio books while doing any other work.
            </p>
          </div>

          <div className='mt-20
          transition ease-in-out delay-150    hover:-translate-y-1 hover:scale-110  duration-300 ...'>
            <RiMailSendLine
              fontSize={50}
              color='rgba(39,70,133,0.8)'
              className='mx-auto'
            />
            <h5 className='text-[#529d96]'>Community</h5>
            <p>
            My Library community  for every genre and discussion 
            groups around every literary topic imaginable. Connect 
            and share ideas around your favourite books.
            </p>
          </div>
        </div>
      </div>
      {/* <hr class="w-8 h-8 mx-auto my-8 bg-gray-200 border-0 rounded md:my-12 dark:bg-gray-700">
<blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white"></blockquote> */}



<hr 
    className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
    
      />



    </div>
  );
};

export default FeatureSection;
