import React, { Component } from "react";
import AddBrewForm from "./components/AddBrewForm";
import BrewList from "./components/BrewList";
import brewsSeed from "./brewsSeed";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { brews: brewsSeed, addBrewFormVisible: false };
  }

  onBrewAdded(brew) {
    brew.date = new Date();
    this.setState(prevState => ({
      brews: [brew, ...prevState.brews],
      addBrewFormVisible: false
    }));
  }

  // Get the unique coffee names that have been used
  getCoffeeNames = () => [
    ...new Set(this.state.brews.map(brew => brew.coffeeName))
  ];

  render() {
    return (
      <div>
        {!this.state.addBrewFormVisible && (
          <button onClick={() => this.setState({ addBrewFormVisible: true })}>
            Add a new brew
          </button>
        )}
        <br />
        {this.state.addBrewFormVisible && (
          <AddBrewForm
            onAdd={brew => this.onBrewAdded(brew)}
            prevCoffeeNames={this.getCoffeeNames()}
          />
        )}
        <BrewList brews={this.state.brews} />
      </div>
    );
  }
}
