import React from "react";
import PersonsList from "../Components/PersonsList/PersonsList";
import "./App.css";

export interface IPersons {
  name: IpersonsNames;
  email: string;
  picture: IpersonsNames;
  cell: number;
  login: IpersonsNames;
}
interface IpersonsNames {
  first: string;
  last: string;
  large: string;
  uuid: number;
}

interface IAppProps {}

interface IAppState {
  persons: Array<IPersons>;
}
class App extends React.Component<IAppProps, IAppState> {
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
