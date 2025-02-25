import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const artists = pgTable("artists", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }),
});

export const artistsRelations = relations(artists, ({ many }) => ({
	songs: many(songs),
}));

export const songs = pgTable("songs", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	artistId: integer(),
	title: varchar({ length: 255 }),
});

export const postsRelations = relations(songs, ({ one }) => ({
	author: one(artists, {
		fields: [songs.artistId],
		references: [artists.id],
	}),
}));
