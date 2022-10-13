import React from "react";
import ProblemCardList from "../ProblemCardList";

const problemsMock = [
  {
    title: "test",
    body: "hola",
    created_at: new Date(),
  },
  {
    title: "test",
    body: "hola",
    created_at: new Date(),
  },
  {
    title: "test",
    body: "hola",
    created_at: new Date(),
  },
  {
    title: "test",
    body: "hola",
    created_at: new Date(),
  },
];

const HomeLayout = ({ problems }) => {
  return (
    <div>
      <ProblemCardList {...problems} list={problemsMock} />
    </div>
  );
};

export default HomeLayout;
