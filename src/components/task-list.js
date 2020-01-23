import React, { Fragment } from "react";
import Task from "./task";

function TaskList(props) {
  return (
    <Fragment>
      {props.tasks.map((task, id) => (
        <Task
          key={id}
          id={id}
          handleDelete={props.handleDelete}
          handleDone={props.handleDone}
          value={task}
          done={props.done}
        ></Task>
      ))}
    </Fragment>
  );
}

export default TaskList;
