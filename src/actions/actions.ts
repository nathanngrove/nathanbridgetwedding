"use server";

import { db } from "@/db";
import { musicSuggestions } from "@/db/schema";
import { z } from "zod";

const inputSchema = z.string();

export async function submitASongAction(prevState: any, formData: FormData) {
	const artist = formData.get("artist");
	const title = formData.get("title");

	const artistParsed = inputSchema.safeParse(artist);
	const titleParsed = inputSchema.safeParse(title);

	if (!artistParsed.success || !titleParsed.success)
		return {
			success: false,
			artist: { submittedArtist: artist, error: artistParsed.error },
			title: { submittedTitle: title, error: titleParsed.error },
		};

	try {
		await db
			.insert(musicSuggestions)
			.values({ artist: artistParsed.data, song: titleParsed.data });

		return {
			status: "success",
			message: `${title} - ${artist} has been added to the list of suggestions. Thank you.`,
			title: title,
			artist: artist,
		};
	} catch (e) {
		return {
			status: "error",
			message: "An error occured. Please try again.",
			title: title,
			artist: artist,
		};
	}
}
