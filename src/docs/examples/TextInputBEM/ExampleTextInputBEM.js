import React from "react";
import TextInputBEM from "ps-react/TextInputBEM";

/** Required TextBox with Error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputBEM
        htmlId="example-optional"
        label="First Name"
        name="First Name"
        onChange={() => {}}
        required
        error="First name is required."
      />
    );
  }
}
