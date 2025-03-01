"use client";

import React, { useActionState } from "react";
import TextInput from "./TextInput";
import { submitASongAction } from "@/actions/actions";

function SubmitASongForm() {
	const [state, formAction, isPending] = useActionState(
		submitASongAction,
		undefined
	);

	console.log(state);

	return (
		<form className="flex flex-col gap-4" action={formAction}>
			<TextInput id="artist" label="Artist" />
			<TextInput id="title" label="Title" />
			<button
				type="submit"
				className="bg-darkemerald text-white py-2 font-semibold"
				disabled={isPending}>
				Submit
			</button>
		</form>
	);
}

export default SubmitASongForm;
