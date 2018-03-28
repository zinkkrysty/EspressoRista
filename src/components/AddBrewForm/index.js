import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Text, Select } from "react-form";

class AddBrewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { brew: {} };
    this.brewTypes = [
      { label: "Espresso", value: "espresso" },
      { label: "Pour Over", value: "pourover" }
    ];
  }

  render() {
    return (
      <Form onSubmit={brew => this.props.onAdd(brew)}>
        {formApi => (
          <form onSubmit={formApi.submitForm}>
            <h1>Adding a brew</h1>
            <label>Coffee Name</label>
            <Text field="coffeeName" />
            <br />
            <label>Brew type</label>
            <Select field="type" options={this.brewTypes} />
            <br />
            <label>Grind size</label>
            <Text field="grindSize" type="number" />
            <br />
            <label>Dose</label>
            <Text field="dose" type="number" />g
            <br />
            <label>Extraction time</label>
            <Text field="extractionTime" type="number" />s
            <br />
            <label>Yield</label>
            <Text field="yield" type="number" />g
            <br />
            <button type="submit">Add</button>
          </form>
        )}
      </Form>
    );
  }
}

AddBrewForm.propTypes = {
  onAdd: PropTypes.func
};

export default AddBrewForm;
