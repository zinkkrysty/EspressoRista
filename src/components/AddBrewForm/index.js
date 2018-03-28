import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Text, Select } from "react-form";

class AddBrewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newCoffeeName: false };
    this.brewTypes = [
      { label: "Espresso", value: "espresso" },
      { label: "Pour Over", value: "pourover" }
    ];
  }

  renderCoffeeNameField = () =>
    this.state.newCoffeeName ? (
      <Text field="coffeeName" />
    ) : (
      <span>
        <Select
          field="coffeeName"
          options={this.props.prevCoffeeNames.map(coffeeName => ({
            label: coffeeName,
            value: coffeeName
          }))}
        />
        <button onClick={() => this.setState({ newCoffeeName: true })}>
          +
        </button>
      </span>
    );

  render() {
    return (
      <Form onSubmit={brew => this.props.onAdd(brew)}>
        {formApi => (
          <form onSubmit={formApi.submitForm}>
            <h1>Adding a brew</h1>
            <label>Coffee Name</label>
            {this.renderCoffeeNameField()}
            <br />
            <label>Brew type</label>
            <Select
              field="type"
              options={this.brewTypes}
              validate={value => (!value ? "Brew type is required" : null)}
            />
            {formApi.errors &&
              formApi.errors.type && (
                <span style={{ color: "red" }}>{formApi.errors.type}</span>
              )}
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
  onAdd: PropTypes.func,
  prevCoffeeNames: PropTypes.array
};

export default AddBrewForm;
