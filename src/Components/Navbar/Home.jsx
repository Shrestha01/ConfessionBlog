import React from "react";
import LeftSidebar from "../LeftSidebar";
import ConfessionList from "../ConfessionList";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-400 ">
      <div className="container flex flex-col sm:flex-row min-h-screen">
        <div className="w-full sm:w-1/5 mt-6 ">
          <LeftSidebar />
        </div>

        <div className="w-full sm:w-3/5 mt-6 px-2 ">
          <ConfessionList />
        </div>
        <div className="w-full sm:w-1/5 mt-6">Right side bar</div>
      </div>
    </div>
  );
};

export default Home;
