import React, { useEffect, useState } from "react";
import NavMenu from "../component/Nav/NavMenu";
import Contents from "../component/Contents/Contents";

const Home = () => {
  return (
    <div className="flex">
      <>
        <NavMenu />
        <main className="w-full mt-11 p-5 flex">
          <div className="flex flex-col">
            <Contents />
          </div>
        </main>
      </>
    </div>
  );
};

export default Home;
