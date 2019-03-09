import React from 'react';
import classnames from 'classnames';

const FormGroup = props => {
  const { name, label, type, placeholder, error, value, handleChange } = props;

  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          type={type}
          value={value}
          className={classnames('form-control', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
};

export default FormGroup;
