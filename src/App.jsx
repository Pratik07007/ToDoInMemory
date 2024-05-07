import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ToDos from "./Components/ToDos";

const App = () => {
  const allTodos = [
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
  return (
    <>
      <Header />
      <div className=" flex flex-col gap-5 items-center justify-center py-48 bg-[#443730] min-h-[80vh]">
        {allTodos.map((todos, index) => {
          return <ToDos key={index} todos={todos} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
