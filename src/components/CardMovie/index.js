import React from "react";
import { useSelector } from "react-redux";
import constants from "../../utils/constants";
import "./style.css";

const CardMovie = (props) => {
  const { movie, loading } = props;
  const genres = useSelector((state) => state.movie.genres);

  if (loading) {
    return (
      <div className="movie-item c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gray-200 rounded relative pb-48 overflow-hidden">
          <div
            className="image absolute inset-0 h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="bg-gray-200 rounded mt-2 mb-2 font-bold"></h2>
          <p className="bg-gray-200 rounded text-sm h-5 mb-1"></p>
          <p className="bg-gray-200 rounded text-sm h-5 mb-1"></p>
          <p className="bg-gray-200 rounded text-sm h-5 mb-1"></p>
          <p className="bg-gray-200 rounded text-sm h-5 mb-1"></p>
          <p className="bg-gray-200 rounded text-sm h-5 mb-1"></p>
          <p className="bg-gray-200 rounded text-sm h-5 mb-1"></p>
          <p className="bg-gray-200 rounded text-sm h-5 mb-1"></p>
        </div>
        <div className="p-4 flex border-t border-b text-xs text-gray-700">
          {[...Array(3)].map((v, i) => {
            return <span className="bg-gray-200 rounded mr-1 w-20 h-5"></span>;
          })}
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
          <span className="bg-gray-200 rounded mr-auto w-20 h-5"></span>
          {[...Array(5)].map((v, i) => {
            return <span className="bg-gray-200 rounded mr-1 w-4 h-3"></span>;
          })}
        </div>
      </div>
    );
  }

  const { title, genre_ids, poster_path, overview, vote_average, vote_count } =
    movie;

  return (
    <div className="movie-item c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="image absolute inset-0 h-full w-full object-cover"
          src={`${constants.BASE_URL_POSTER}${poster_path}`}
          alt=""
        />
      </div>
      <div className="p-4">
        <h2 className="mt-2 mb-2  font-bold">{title}</h2>
        <p className="text-sm description">{overview}</p>
      </div>
      <div className="p-4 border-t border-b text-xs text-gray-700">
        {genres &&
          genres.length > 0 &&
          genre_ids.map((genre_id) => {
            const { name } = genres.find((genre) => genre.id === genre_id);
            if (name) {
              return (
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {name}
                </span>
              );
            }
          })}
      </div>
      <div className="p-4 flex items-center text-sm text-gray-600">
        <span className="mr-auto">Vote: {vote_count || 0}</span>
        {[...Array(5)].map((v, i) => {
          if (i < Math.floor(vote_average / 2)) {
            return (
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-yellow-500"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
            );
          } else {
            return (
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-gray-400"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardMovie;
