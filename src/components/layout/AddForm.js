import React from 'react';
import FormGroup from './FormGroup';
import PropTypes from 'prop-types';

const AddForm = props => {
  const { onChange, onSubmit } = props;

  const { errors, firstName, lastName, email, phone } = props.parentState;

  return (
    <form onSubmit={onSubmit}>
      <FormGroup
        name="firstName"
        label="First Name"
        type="text"
        placeholder="Enter First Name"
        handleChange={onChange}
        value={firstName}
        error={errors.firstName}
      />
      <FormGroup
        name="lastName"
        label="Last Name"
        type="text"
        placeholder="Enter Last Name"
        handleChange={onChange}
        value={lastName}
        error={errors.lastName}
      />
      <FormGroup
        name="email"
        label="Email"
        type="email"
        placeholder="Enter Email"
        handleChange={onChange}
        value={email}
        error={errors.email}
      />
      <FormGroup
        name="phone"
        label="Phone Number"
        type="text"
        placeholder="Enter Phone Number"
        handleChange={onChange}
        value={phone}
        error={errors.phone}
      />
      <input
        type="submit"
        value="Submit"
        className="btn btn-danger btn-block"
      />
    </form>
  );
};

AddForm.propTypes = {
  parentState: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddForm;
