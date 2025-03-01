"use client";

import React from "react";

type TextInputProps = {
	label: string;
	id: string;
	placeholder?: string;
};

function TextInput({ label, id, placeholder }: TextInputProps) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id}>{label}</label>
			<input
				type="text"
				name={id}
				className="border-2 border-black p-2"
				id={id}
				placeholder={placeholder ? placeholder : label}
				required
			/>
		</div>
	);
}

export default TextInput;
