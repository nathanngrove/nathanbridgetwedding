import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const musicSuggestions = pgTable("musicSuggestions", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	artist: varchar({ length: 255 }),
	song: varchar({ length: 255 }),
});
