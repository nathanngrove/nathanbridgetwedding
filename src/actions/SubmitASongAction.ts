"use server";

import { SongSubmission } from "@/components/SubmitASongForm";
import { db } from "@/db";
import { artists, songs } from "@/db/schema";

export default async function submitASongAction(formData: FormData) {
	const artist = formData.get("artist");
	const title = formData.get("title");

	const newArtist = await db
		.insert(artists)
		.values({ name: artist as string })
		.returning({ artistId: artists.id });
	const newSong = await db
		.insert(songs)
		.values({ artistId: newArtist[0].artistId, title: title as string });

	return `${artist} - ${title} successfully saved in the database`;
}
