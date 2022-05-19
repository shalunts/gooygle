import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

// To get rid off the errors in console related to ReactPlayer
window.YTConfig = {
  host: 'https://www.youtube.com',
};

const Results = () => {
  const { results, isLoading, getResults, searchTerm } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else if (location.pathname === '/images') {
        getResults(`/image/q=${searchTerm}`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className='sm:px-56 flex flex-wrap justify-between space-y-6 mt-5'>
          {results?.map((item, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a href={item.link} target='_blank' rel='noreferrer'>
                <p className='text-sm'>
                  {item.link.length > 30
                    ? item.link.substring(0, 30)
                    : item.link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700  '>
                  {item.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center mt-5'>
          {results?.map((item, index) => (
            <a
              href={item.link?.href}
              target='_blank'
              key={index}
              rel='noreferrer'
              className='sm:p-3 p-5'
            >
              <img
                src={item.image?.src}
                alt={item.link?.title}
                loading='lazy'
              />
              <p className='sm:w-36 w-36 break-words text-sm mt-2'>
                {item.link?.title}
              </p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className='sm:px-56 flex flex-wrap justify-between items-center space-y-6 mt-5'>
          {results?.map(({ id, links, source, title }, index) => (
            <div key={index} className='md:w-2/5 w-full '>
              <a
                href={links?.[0].href}
                target='_blank'
                rel='noreferrer '
                className='hover:underline '
              >
                <p className='text-lg dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
              <div className='flex gap-4'>
                <a
                  href={source?.href}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline hover:text-blue-300'
                >
                  {' '}
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className='flex flex-wrap  mt-5'>
          {results?.map((video, index) => (
            <div key={index} className='p-2'>
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width='355px'
                  height='200px'
                />
              )}
            </div>
          ))}
        </div>
      );
    default:
      return 'Error...';
  }
};

export default Results;
