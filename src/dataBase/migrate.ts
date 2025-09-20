import {type SQLiteDatabase } from "expo-sqlite";

export async function migrate(dataBase: SQLiteDatabase) {
    await dataBase.execAsync(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS targets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        amount FLOAT NOT NULL,
        created_at timestamp NOT NULL DEFAULT current_timestamp,
        updated_at timestamp NOT NULL DEFAULT current_timestamp
    );
  `);
}