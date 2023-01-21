export type ID = string | number;

export type Post = {
  id: ID;
  title: string;
  description: string;
  tags: string[];
};
