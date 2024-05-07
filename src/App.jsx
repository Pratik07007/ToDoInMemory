import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ToDos from "./Components/ToDos";

const App = () => {
  const tods = [
    {
      title: "Learn ML",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn ML",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn AI",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn React",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: true,
    },
    {
      title: "Learn ML",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn ML",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn AI",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn React",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: true,
    },
    {
      title: "Learn ML",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn ML",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn AI",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: false,
    },
    {
      title: "Learn React",
      desc: "Learn ML from WLV resources provided in canvas",
      isCompleted: true,
    },
  ];
  const [allTodos, setAllTodos] = useState(tods);
  const [todo, setToDo] = useState({ isCompleted: false });
  console.log(todo);
  const addTodo = (e) => {
    e.preventDefault();
    setAllTodos([...allTodos, todo]);
    setToDo({ title: "", desc: "", isCompleted: false });
  };
  return (
    <>
      <Header />
      <div className=" flex flex-col gap-5 items-center justify-center py-48 bg-[#443730] min-h-[80vh]">
        <div>
          <form onSubmit={addTodo}>
            <input
              onChange={(e) => {
                setToDo({ ...todo, title: e.target.value });
              }}
              className="outline-none w-96 h-10 text-black text-2xl  px-5"
              type="text"
              placeholder="Enter the Title"
            />

            <input
              onChange={(e) => {
                setToDo({ ...todo, desc: e.target.value });
              }}
              className="outline-none w-96 h-10 text-black text-2xl ml-2  px-5"
              type="text"
              placeholder="Enter the Description"
            />
            <button
              className="h-10 text-2xl bg-green-700 rounded-tr-3xl rounded-br-3xl px-3 "
              type="submit"
            >
              Add Todo
            </button>
          </form>
        </div>
        {allTodos.map((todos, index) => {
          return <ToDos key={index} todos={todos} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
