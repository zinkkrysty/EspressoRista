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
      <Text className="form-control" field="coffeeName" />
    ) : (
      <div className="input-group">
        <Select
          field="coffeeName"
          options={this.props.prevCoffeeNames.map(coffeeName => ({
            label: coffeeName,
            value: coffeeName
          }))}
          className="custom-select"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            onClick={() => this.setState({ newCoffeeName: true })}
          >
            +
          </button>
        </div>
      </div>
    );

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <Form onSubmit={brew => this.props.onAdd(brew)}>
            {formApi => (
              <form onSubmit={formApi.submitForm}>
                <h2>What do you want to brew?</h2>
                <div className="form-group">
                  <label>Coffee Name</label>
                  {this.renderCoffeeNameField()}
                </div>
                <div className="form-group">
                  <label>Brew type</label>
                  <Select
                    field="type"
                    options={this.brewTypes}
                    validate={value =>
                      !value ? "Brew type is required" : null
                    }
                    className="custom-select"
                  />
                  {formApi.errors &&
                    formApi.errors.type && (
                      <span style={{ color: "red" }}>
                        {formApi.errors.type}
                      </span>
                    )}
                </div>
                <div className="form-group">
                  <label>Grind size</label>
                  <Text
                    field="grindSize"
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Dose</label>
                  <div className="input-group">
                    <Text field="dose" type="number" className="form-control" />
                    <div className="input-group-append">
                      <span className="input-group-text">g</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Extraction time</label>
                  <div className="input-group">
                    <Text
                      field="extractionTime"
                      type="number"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">s</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Yield</label>
                  <div className="input-group">
                    <Text
                      field="yield"
                      type="number"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">g</span>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Add brew
                </button>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

AddBrewForm.propTypes = {
  onAdd: PropTypes.func,
  prevCoffeeNames: PropTypes.array
};

export default AddBrewForm;
