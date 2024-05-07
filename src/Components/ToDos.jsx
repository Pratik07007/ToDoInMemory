import React from "react";

const ToDos = ({ todos: { title, desc, isCompleted, id } }) => {
  const deleteToDo = () => {
    console.log(id);
  };
  const toogleCompletionStatus=()=>{

  }
  return (
    <>
      <div className="flex flex-col gap-2 items-start bg-gray-700  min-w-[40vw] px-5 py-5 border-2 border-black border-solid">
        {!isCompleted ? (
          <h1 className="text-3xl">{title}</h1>
        ) : (
          <h1 className="text-3xl line-through">{title}</h1>
        )}
        {!isCompleted ? (
          <h2 className="text-2xl">{desc}</h2>
        ) : (
          <h2 className="text-2xl line-through">{desc}</h2>
        )}
        <div className=" space-x-2">
          <button
            onClick={toogleCompletionStatus}
            className="bg-green-700 px-3 py-3 rounded-3xl text-2xl"
          >
            {isCompleted ? "Undo Completion" : "Mark as completed"}
          </button>
          <button onClick={deleteToDo} className="bg-red-500 px-3 py-3 rounded-3xl text-2xl">
            Delete Todo
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDos;
