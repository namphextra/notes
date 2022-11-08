export type Note = {
  title: string;
  content: string;
  created_at: number;
  updated_at: number;
};

export type NoteState = {
  [key: string]: Note[];
};
