import { Icon } from "@iconify/react";
import React from "react";

export const DeleteVideoButton = ({ handleDelete }) => {
  return (
    <button title={"Delete Video"}>
      <Icon
        onClick={handleDelete}
        className={
          "absolute top-2 right-2 text-white text-2xl hover:text-red-600 transition ease-in-out duration-300"
        }
        icon="akar-icons:circle-x-fill"
      />
    </button>
  );
};