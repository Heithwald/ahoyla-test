import React from "react";
import Player from "./Player";
import TestHeader from "./TestTitle";
import TestForm from "./TestForm";

const TaskWindow = () => {
  return (
    <div className="task-window">
      <div className="content-wrapper">
        <Player />
        <TestHeader />
        <TestForm />
      </div>
    </div>
  );
};

export default TaskWindow;
