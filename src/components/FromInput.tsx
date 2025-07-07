import React from "react";

type FormInputType = {
	name: string;
	value?: number;
	disabled?: boolean;
	setSelected?: React.Dispatch<React.SetStateAction<number>>;
	label?: string;
};

function FromInput({
	name,
	value,
	disabled = false,
	setSelected,
	label,
}: FormInputType) {
	return (
		<div className="grid gap-2">
			{label == null ? null : <label htmlFor={name}>{label}</label>}
			<input
				id={name}
				name={name}
				type="text"
				maxLength={40}
				className="text-xl py-2 px-4 w-full border-black border-[1px] rounded-md"
				disabled={disabled}
				required={!disabled}
			/>
		</div>
	);
}

export default FromInput;
