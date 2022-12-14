import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import GenreButtonController from "./Buttons/GenreButtonController";
import { AddGenreForm } from "./Forms/AddGenreForm";
import { AddGenreButton } from "./Buttons/AddGenreButton";
import { useToggleActive } from "../../../hooks/useToggleActive";

export const GenreMenu = () => {
  const { videos, currentGenre } = useContext(Context);
  const { isActive: formShowing, toggleActive: toggleFormShowing } =
    useToggleActive();

  return (
    <section
      className={"hidden md:flex absolute top-5 text-xl gap-4 items-center"}
    >
      {Object.keys(videos).map((genre) => {
        return (
          <React.Fragment key={genre}>
            <GenreButtonController
              genre={genre}
              count={videos[genre].ids.length}
              isCurrentGenre={genre === currentGenre}
            />
          </React.Fragment>
        );
      })}
      <AddGenreButton handleShowGenreForm={toggleFormShowing} />
      {formShowing && <AddGenreForm handleShowGenreForm={toggleFormShowing} />}
    </section>
  );
};
