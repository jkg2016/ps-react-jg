import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/** Registration form with built-in validation. */
class RegistrationForm extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            user: {
                email: '',
                password: ''
            },
            errors: {},
            submitted: false,
        };
    }

    onChange = (event) => {
        const user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    passwordQuality(password){
        if(!password) return null;
        if(password.length >= this.props.minPasswordLength) return 100;
        const percentOfMinLength = parseInt(password.length/this.props.minPasswordLength * 100, 10);
        return percentOfMinLength;
    }

    validate({email, password}){
        const errors = {};
        const {minPasswordLength} = this.props;

        if(!email) errors.email = 'Email required.';
        if(password.length < minPasswordLength) errors.password = `Password must be at list ${minPasswordLength} charaters.`;

        this.setState({errors});
        const formIsValid = Object.getOwnPropertyNames(errors).length ===0;
        return formIsValid;
    }

    onSubmit = () => {
        const {user} = this.state;
        const formIsValid = this.validate(user);
        if(formIsValid){
            this.props.onSubmit(user);
            this.setState({submitedd:true});
        }
    }

    render(){
        const {errors, submitted} = this.state;
        const {email, password} = this.state.user;

        return (
            submitted ?
            <h2>{this.props.confirmationMessage}</h2> :
            <div>
                <TextInput 
                    htmlId = "registration-form-email"
                    name = "email"
                    onChange={this.onChange}
                    label = "Email"
                    value = {email}
                    errors = {errors.email}
                    required
                />

                <PasswordInput 
                    htmlId = "registration-form-password"
                    name = "password"
                    value = {password}
                    onChange = {this.onChange}
                    quality={this.passwordQuality(password)}
                    showVisibilityToggle
                    maxLength={50}
                    error={errors.password}
                />
                <inpute type="submit" value="Register" onClick={this.Submit} />
            </div>
        )

    }
}

RegistrationForm.propTypes = {
    /** Message displayed upon successful submission */
    confirmationMessage: PropTypes.string,
  
    /** Called when form is submitted */
    onSubmit: PropTypes.func.isRequired,
  
    /** Minimum password length */
    minPasswordLength: PropTypes.number
  }
  
  RegistrationForm.defaultProps = {
    confirmationMessage: "Thanks for registering!",
    minPasswordLength: 8
  };
  
  export default RegistrationForm;