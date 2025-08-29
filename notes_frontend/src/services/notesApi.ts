export type Note = {
  id: string;
  title: string;
  content: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
};

export type NoteInput = {
  title: string;
  content: string;
  tags?: string[];
};

// PUBLIC_INTERFACE
export function getApiBase(): string {
  /** Returns the Notes API base URL from environment variable or defaults to '/api'. */
  const base = import.meta.env.PUBLIC_NOTES_API_BASE || '/api';
  return base.replace(/\/+$/, '');
}

// PUBLIC_INTERFACE
export async function listNotes(q?: string): Promise<Note[]> {
  /** Fetch list of notes, optionally filtered by search query 'q'. */
  const url = new URL(`${getApiBase()}/notes`, window.location.origin);
  if (q && q.trim()) url.searchParams.set('q', q.trim());
  const res = await fetch(url.toString(), { headers: { 'Accept': 'application/json' } });
  if (!res.ok) throw new Error(`Failed to list notes: ${res.status}`);
  return res.json();
}

// PUBLIC_INTERFACE
export async function getNote(id: string): Promise<Note> {
  /** Fetch a single note by id. */
  const res = await fetch(`${getApiBase()}/notes/${encodeURIComponent(id)}`, {
    headers: { 'Accept': 'application/json' },
  });
  if (!res.ok) throw new Error(`Failed to get note: ${res.status}`);
  return res.json();
}

// PUBLIC_INTERFACE
export async function createNote(input: NoteInput): Promise<Note> {
  /** Create a new note. */
  const res = await fetch(`${getApiBase()}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Failed to create note: ${res.status}`);
  return res.json();
}

// PUBLIC_INTERFACE
export async function updateNote(id: string, input: NoteInput): Promise<Note> {
  /** Update an existing note by id. */
  const res = await fetch(`${getApiBase()}/notes/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Failed to update note: ${res.status}`);
  return res.json();
}

// PUBLIC_INTERFACE
export async function deleteNote(id: string): Promise<void> {
  /** Delete a note by id. */
  const res = await fetch(`${getApiBase()}/notes/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete note: ${res.status}`);
}
