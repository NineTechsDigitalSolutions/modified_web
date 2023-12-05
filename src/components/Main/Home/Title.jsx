import React from 'react'
import { phone, phone2 } from '../../../assets';

const Title = () => {
  return (
    <div>

  <br />
        <br />
        <br />
<div className='text-center '>
      <div className='container mx-auto'>

      <div className='row justify-content-center text-center mb-5'>
          <div >
            <h2 className='text-4xl section-heading'>  <br />What is My Library ?</h2>
          </div>
      </div>
      <br />
        <div className='lg:flex mt-10'>
          
          <div className='flex-[0_0_50%] lg:max-w-[50%] 
          transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:font-bold duration-300 ...
          '>
           <img src={phone2} alt='' className='mx-auto max-h-80' />
          </div>
          <div className='flex-[0_0_50%] lg:max-w-[50%] mt-10 lg:mt-0 flex items-center'>
            <p class="my-10">
              My Library is a digital library, with large number of sinhala english e books , audio books , e newspaper 
              and e magazines. you can read , listen all those digital materials with your mobile phone or tablets. 'My Library' Digital Library provides free and paid high-quality digital materials such as e books, audio books for anyone, anywhere.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr 
    className="gradient"
    
      />

<br /> <br /> <br /> <br />
    </div>
   
    </div>
  )
}

export default Title;



