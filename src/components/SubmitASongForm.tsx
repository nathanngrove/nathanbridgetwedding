"use client";

import React, { useActionState } from "react";
import TextInput from "./TextInput";

export type SongSubmission = {
	artist: string;
	title: string;
};

const initialState: SongSubmission = { artist: "", title: "" };

function SubmitASongForm(
	action: (previousState: any, formData: FormData) => Promise<string>
) {
	const [state, formAction, isPending] = useActionState(action, initialState);

	return (
		<form className="flex flex-col gap-2">
			<TextInput id="artist" label="Artist" />
			<TextInput id="title" label="Title" />
			<button
				className="bg-darkemerald text-white py-2 text-xl font-semibold"
				type="submit">
				Submit
			</button>
		</form>
	);
}

export default SubmitASongForm;
