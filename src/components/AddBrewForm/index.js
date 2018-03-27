import React, { Component } from "react";

class AddBrewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { brew: { coffeeName: "" } };
  }

  handleInputChange(attributeName, event) {
    let newValue = event.target.value;
    this.setState((prevState, props) => {
      return {
        brew: { ...prevState.brew, [attributeName]: newValue }
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Adding a brew</h1>
        <label>Coffee Name</label>
        <input
          type="text"
          value={this.state.brew.coffeeName}
          onChange={e => this.handleInputChange("coffeeName", e)}
        />
      </div>
    );
  }
}

export default AddBrewForm;
