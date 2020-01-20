import React from "react";
function Task(props) {
  return (
    <div>
      <h3>{props.value}</h3>
      <div>
        <button
          onClick={() => {
            props.handleDelete(props.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
export default Task;
