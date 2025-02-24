import React from "react";

type TextInputProps = {
	label: string;
	id: string;
	placeholder?: string;
};

function TextInput({ label, id, placeholder }: TextInputProps) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				type="text"
				name={id}
				className="border-2 border-black p-2"
				id={id}
				placeholder={placeholder ? placeholder : label}
			/>
		</>
	);
}

export default TextInput;
