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
      tasks: []
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
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
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
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask);
    this.setState({
      newTask: "",
      tasks: newTasks
    });
  };
  handleDelete = id => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1);
    this.setState({
      tasks: newTasks
    });
  };
}

export default App;
