import React, { useState } from 'react';

import { animated, useSpring } from 'react-spring';

function PortfolioItem({ title, imgUrl, stack, link, information, button }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalSpring = useSpring({
    transform: isModalOpen ? 'scale(1)' : 'scale(0)',
    opacity: isModalOpen ? 1 : 0,
  });

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className='border-2 border-stone-300 rounded-md overflow-hidden cursor-pointer'
      >
        <img
          src={imgUrl}
          alt="Image that displays a snippet of the project"
          className='w-full h-36 md:h-48 object-cover'
        ></img>
        <div className='w-full p-4'>
          <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
            {title}
          </h3>
          <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-small'>
            {stack.map((item) => (
              <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-300 rounded-md'>
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
      {isModalOpen && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center'>
          <div
            onClick={() => setModalOpen(false)}
            className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 -z-50 flex items-center justify-center'
          ></div>
          <animated.div
            className='relative m-4 z-1'
            style={{...modalSpring, width: '30vw', height: '50vh'}}
          >
            <div className='absolute top-0 right-0 m-2'>
              <button
                onClick={() => setModalOpen(false)}
                className='p-2 rounded-full bg-red-600 z-50'
              >
                <i className='fa fa-times' aria-hidden='true'></i>
              </button>
            </div>
            <div className='bg-stone-200 p-4 rounded-md h-full flex flex-col justify-center'>
              <div className='relative p-4 bg-gray-200 w-full mx-auto flex rounded-md text-black justify-center items-center text-[14px] z-10'>
                {information} 
              </div>
              {button && (
                <div className='h-16 bottom-0 absolute w-full'>
                  <a href='https://github.com/kylowxtt/kylowxtt.github.io' target='__blank'>
                  <button className='mt-2 rounded-md px-3 py-2 bg-blue-600 text-xs font-semibold block mx-auto'>
                    {button}
                  </button></a>
                </div>
              )}
            </div>
          </animated.div>
        </div>      )}
    </>
  );
}

export default PortfolioItem;

