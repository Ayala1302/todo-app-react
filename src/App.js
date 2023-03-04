import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      inputValue: "",
      listofTodos: [],
    };
  }

  handleClick = () => {
    this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true });
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      listofTodos: [...this.state.listofTodos, this.state.inputValue],
    });
    this.setState({ inputValue: "" });
  };

  deleteTodo = (index) => {
    this.setState({
      ...this.state,
      listofTodos: this.state.listofTodos.filter((todo, i) => i !== index),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Submit</button>
          </form>
          <button onClick={this.handleClick}>Click Me</button>
          <ol>
            {this.state.listofTodos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo}{" "}
                  <button onClick={() => this.deleteTodo(index)}>Delete</button>
                </li>
              );
            })}
          </ol>
          <p>{this.state.isClicked ? "true" : "false"}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
