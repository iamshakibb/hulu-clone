import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ result }: any, ref: any) => {
  const Base_Url = 'https://image.tmdb.org/t/p/original';
  return (
    <div
      ref={ref}
      className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1000}
        width={1920}
        src={
          `${Base_Url}${result.backdrop_path || result.poster_path}` ||
          `${Base_Url}${result.poster_path}`
        }
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} .`}{' '}
          {result.release_date || result.first_air_date} .{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
