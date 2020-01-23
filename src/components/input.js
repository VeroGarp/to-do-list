import * as M from "@material-ui/core";
import React from "react";

function Input(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <M.TextField
        label="Write your task here"
        value={props.value}
        onChange={props.handleTaskChange}
        type="text"
        variant="outlined"
      />
    </form>
  );
}
export default Input;
