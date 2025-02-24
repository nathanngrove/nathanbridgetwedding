"use client";

import React, { useActionState } from "react";
import TextInput from "./TextInput";
import submitASongAction from "@/actions/SubmitASongAction";

export type SongSubmission = {
	artist: string;
	title: string;
};

const initialState: SongSubmission = { artist: "", title: "" };

function SubmitASongForm() {
	const [state, formAction, isPending] = useActionState(
		submitASongAction,
		initialState
	);

	return (
		<form className="flex flex-col gap-2" action={formAction}>
			<TextInput id="artist" label="Artist" />
			<TextInput id="title" label="Title" />
			<button
				className="bg-darkemerald text-white py-2 text-xl font-semibold"
				type="submit"
				disabled={isPending}>
				Submit
			</button>
		</form>
	);
}

export default SubmitASongForm;
