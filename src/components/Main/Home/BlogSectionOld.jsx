import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <>
    <div className='bg-blog  bg-no-repeat bg-left-top bg-cover text-center py-12 '>
      <div className='container mx-auto'>
        <h2 className='text-5xl   text-[#529d96] 
        transition ease-in-out delay-150  hover:font-semibold hover:-translate-y-1 hover:scale-110  duration-300 ...
        '>My Library "Blog"</h2>
        <p className='text-lg my-10 
        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...
        '>
          Join my library blog to read interesting articles about books, <br />{' '}
          authors and many more{' '}
        </p>



        <Link
          to='/blog'
          className=' 
          
          px-10 py-3 mt-5 rounded-[50px] gradient-button  text-white border-[1px] border-[#3c9b9b] text-sm font-bold capitalize '
          
          
          
        >
          visit blog
        </Link>
               
      </div>
      
      
    </div>
    <hr 
    className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
    
      />

    
     
    </>
  );
};

export default BlogSection;
