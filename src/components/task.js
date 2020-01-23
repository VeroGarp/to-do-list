import * as M from "@material-ui/core";
import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

function Task(props) {
  if (!props.done) {
    return IncompleteTask(props);
  } else {
    return DoneTask(props);
  }
}

function IncompleteTask(props) {
  return (
    <div>
      <p>{props.value}</p>
      <M.Button
        onClick={() => {
          props.handleDelete(props.id);
        }}
      >
        <ClearIcon />
      </M.Button>
      <M.Button
        onClick={() => {
          props.handleDone(props.id);
        }}
      >
        <CheckIcon />
      </M.Button>
    </div>
  );
}

function DoneTask(props) {
  return <p>COMPLETED</p>;
}

export default Task;
