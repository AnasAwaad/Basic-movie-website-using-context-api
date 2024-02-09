import { ReactNode } from 'react';
import { IMovie } from '../interfaces';

import './Card.css';

interface IProps {
  movie: IMovie;
  children: ReactNode;
}

const Card = ({ movie, children }: IProps) => {
  return (
    <div className="relative card ">
      <div className="absolute top-0 left-0 w-full h-full hover:bg-[#0000007a] bg-transparent">
        <div className="absolute bottom-5  items-center justify-center flex-wrap sm:flex-col md:flex-row gap-4 w-full hidden activebtn ">{children}</div>
      </div>
      <div className="w-full h-full">
        <img src={movie.Poster} className=" mx-auto  sm:w-full sm:h-full" />
      </div>
    </div>
  );
};
export default Card;
