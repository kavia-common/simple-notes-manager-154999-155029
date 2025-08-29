# Notes Frontend (Astro) - Integration Guide

This frontend is ready to integrate with the `notes_database` backend.

## Environment Variables

Create a `.env` file in this directory and set:

- PUBLIC_NOTES_API_BASE: Base URL for the notes backend (must be publicly reachable by the browser).

Example:
PUBLIC_NOTES_API_BASE=http://localhost:8080

Note: Astro exposes only variables prefixed with PUBLIC_ to client-side code.

## Expected Backend API

- GET    {PUBLIC_NOTES_API_BASE}/notes?q=search      -> 200 JSON: Note[]
- POST   {PUBLIC_NOTES_API_BASE}/notes               -> 201 JSON: Note
- GET    {PUBLIC_NOTES_API_BASE}/notes/:id           -> 200 JSON: Note
- PUT    {PUBLIC_NOTES_API_BASE}/notes/:id           -> 200 JSON: Note
- DELETE {PUBLIC_NOTES_API_BASE}/notes/:id           -> 204

Note shape:
{
  "id": "string",
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "created_at": "ISO timestamp",
  "updated_at": "ISO timestamp"
}

## Run

npm install
npm run dev

Open http://localhost:3000

## Features

- Create, edit, delete notes
- List and detail views
- Search with query bar in header
- Responsive grid
- Light, modern, minimalistic theme with colors:
  - primary: #3B82F6
  - secondary: #6366F1
  - accent: #F59E42
