import React, { Component } from "react";
import AddBrewForm from "./components/AddBrewForm";
import BrewList from "./components/BrewList";
import brewsSeed from "./brewsSeed";

import "./style.scss";

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
      <div className="container mt-3">
        {!this.state.addBrewFormVisible && (
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ addBrewFormVisible: true })}
          >
            Brew now
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
