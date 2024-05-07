import React from "react";

const Header = () => {
  return (
    <div className="h-[10vh] bg-[#5b8e7d] w-screen flex justify-between items-center px-6 fixed top-0">
      <h1 className="text-4xl font-mono">Pratik</h1>
      <div>
        <h1 className="text-4xl font-mono">To Do Application</h1>
      </div>
      <div>
        <a
          className="text-3xl font-mono bg-blue-700 px-3 py-3 rounded-3xl"
          href=""
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Header;
