import React, { useContext } from "react";
import { MobileMenuHamburgerIcon } from "./Mobile Menu/MobileMenuHamburgerIcon";
import { GenreMenu } from "../pages/Library/GenresMenu/GenreMenu";
import { Profile } from "./Profile";
import { Context } from "../context/Context";

const Layout = ({ children }) => {
  const { videos } = useContext(Context);

  const backgroundStyle = {
    backgroundImage: "url('/images/blob-scene-haikeiV2.svg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className={`min-h-screen min-w-screen font-roboto p-10 flex flex-col gap-10 items-center justify-center`}
      style={backgroundStyle}
    >
      {videos && (
        <>
          <GenreMenu />
          <MobileMenuHamburgerIcon />
        </>
      )}
      <Profile />
      {children}
    </div>
  );
};

export default Layout;
