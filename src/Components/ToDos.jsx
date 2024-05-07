import React from "react";

const ToDos = ({todos:{title,desc,isCompleted}}) => {
  
  return (
    <>
    <div className="flex flex-col gap-2 items-start bg-gray-700  min-w-[40vw] px-5 py-5 border-2 border-black border-solid">
        <h1 className="text-3xl">{title}</h1>
        <h2 className="text-2xl">{desc}</h2>
        <button className="bg-green-700 px-3 py-3 rounded-3xl text-2xl">{isCompleted?"Completed":"Mark as completed"}</button>
    </div>
    </>
  );
};

export default ToDos;
