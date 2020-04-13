import React from "react";
import PersonsList from "../Components/PersonsList/PersonsList";
import "./App.css";

class App extends React.Component {
  state = {
    persons: []
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?&nat=gb&results=20")
      .then(response => response.json())
      .then(users =>
        this.setState({
          persons: users.results
        })
      );
  }
  render() {
    return (
      <div>
        <h1 className="tc">PersonsList</h1>
        <PersonsList persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
