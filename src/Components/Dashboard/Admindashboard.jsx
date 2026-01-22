import React from "react";
import Header from "../Other/Header";
import { Input } from "postcss";
import Createtask from "../Other/Createtask";
import Alltask from "../Other/Alltask";

const Admindashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser}/>
      <Createtask />
      <Alltask />


    </div>
  );
};

export default Admindashboard;
