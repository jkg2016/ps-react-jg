import React from 'react';
import RegistrationForm from './RegistrationForm';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test('ValidateEmail', () => {
  const wrapper = shallow(<RegistrationForm
    htmlId = "registration-form-email"
    name = "email"
    onChange={() => {}}
    label = "Email"
    value = "J"
    />
  );

  
  expect(wrapper.find({name: 'email'})).toHaveLength(1);


});