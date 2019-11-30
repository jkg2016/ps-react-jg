import React from "react";
import TextInputCSSModules from "ps-react/TextInputCSSModules";

/** Required TextBox with Error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputCSSModules
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
