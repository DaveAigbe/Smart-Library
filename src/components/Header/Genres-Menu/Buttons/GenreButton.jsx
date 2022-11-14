import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { titleCaseConverter } from "../../../../utils/titleCaseConverter";

const GenreButton = ({ genre, count, isCurrentGenre }) => {
  const { genreActive, handleGenreClick } = useContext(Context);

  return (
    <>
      {!genreActive ? (
        <button
          title={count}
          onClick={() => handleGenreClick(genre)}
          className={
            `${
              isCurrentGenre ? "text-yellow-300 font-bold " : "text-white "
            } tracking-wide bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ` +
            "focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300 " +
            "rounded-lg text-sm px-5 py-2.5 text-center"
          }
        >
          {titleCaseConverter(genre)}
        </button>
      ) : (
        <div
          title={count}
          className={
            "tracking-wide text-green-400 font-bold text-md pt-2 pb-2 flex items-center"
          }
        >
          {titleCaseConverter(genre)}
        </div>
      )}
    </>
  );
};

export default GenreButton;
