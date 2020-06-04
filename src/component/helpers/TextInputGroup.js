import React from 'react';
import classenames from 'classnames';

export default function TextInputGroup(props) {
	return (
		<div className="form-group">
			<label htmlFor={ props.name }>{ props.label }</label>
			<input	type={ props.type }
					className={ classenames('form-control', { 'is-invalid' : props.error }) }
					value={ props.value }
					name={ props.name }
					onChange={ props.onChange }
			/>
			<div className="invalid-feedback">{ props.error }</div>
		</div>
	);
}
