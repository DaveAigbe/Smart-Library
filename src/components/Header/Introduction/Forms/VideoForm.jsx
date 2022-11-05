import React, { useContext, useRef } from "react";
import { Context } from "../../../../context/Context";

const VideoForm = () => {
  const idRef = useRef();
  const { videos, setVideos } = useContext(Context);

  // Reducer

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!videos.all.ids.includes(idRef.current.value)) {
      const updatedIds = [idRef.current.value, ...videos.all.ids];
      const updatedVideos = { ...videos, all: { ids: updatedIds } };

      setVideos(updatedVideos);
    } else {
      alert("Video already exists!");
    }

    idRef.current.value = "";
  };

  return (
    <form
      className={"flex flex-col gap-4 justify-center items-center text-black"}
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <input
        ref={idRef}
        type="text"
        className={"bg-white p-4 rounded w-full md:w-96 h-14 "}
        placeholder={"ID"}
        minLength={11}
        required={true}
      />
      <button
        type={"submit"}
        className={
          "text-black bg-purple-300 rounded w-full md:w-96 h-14  hover:bg-purple-500 hover:animate-pulse hover:translate-y-0.5 hover:translate-x-0.5 shadow-lg shadow-purple-600 transition duration-300 ease-in-out font-bold"
        }
      >
        Save Video
      </button>
    </form>
  );
};

export default VideoForm;