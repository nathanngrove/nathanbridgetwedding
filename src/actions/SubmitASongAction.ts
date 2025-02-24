"use server";

import { SongSubmission } from "@/components/SubmitASongForm";

export default async function submitASongAction(
	previousState: SongSubmission,
	formData: FormData
) {
	const artist = formData.get("artist");
	const title = formData.get("title");

	console.log(artist);
	console.log(title);
	return artist;
}
