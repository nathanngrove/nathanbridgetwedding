import React from "react";
import TextInput from "./TextInput";

function SubmitASongForm() {
	return (
		<form className="flex flex-col gap-2">
			<TextInput id="title" label="Title" />
			<TextInput id="artist" label="Artist" />
			<button
				className="bg-darkemerald text-white py-2 text-xl font-semibold"
				type="submit">
				Submit
			</button>
		</form>
	);
}

export default SubmitASongForm;
