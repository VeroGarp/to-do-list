import React, { Component } from "react";
import "./App.css";
import Title from "./components/title";
import Layout from "./components/layout";
import TaskList from "./components/task-list";
import Input from "./components/input";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      incomplete: [],
      done: []
    };
  }

  render() {
    return (
      <Layout>
        <Title></Title>
        <Input
          handleSubmit={this.handleSubmit}
          handleTaskChange={this.handleTaskChange}
          value={this.state.newTask}
        ></Input>

        <TaskList
          tasks={this.state.incomplete}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
        ></TaskList>
        <h2>Done</h2>
        <TaskList
          tasks={this.state.done}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
          done
        ></TaskList>
      </Layout>
    );
  }

  handleTaskChange = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newTasks = this.state.incomplete;
    newTasks.push(this.state.newTask);
    this.setState({
      newTask: "",
      incomplete: newTasks
    });
  };

  handleDelete = id => {
    let newTasks = this.state.incomplete;
    newTasks.splice(id, 1);
    this.setState({
      incomplete: newTasks
    });
  };

  handleDone = id => {
    let newTasks = this.state.incomplete;
    let completed = newTasks.splice(id, 1);
    this.setState({
      tasks: newTasks,
      done: [...this.state.done, ...completed]
    });
  };
}

export default App;
