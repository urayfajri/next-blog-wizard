export type DraftPost = {
  title: string; author: string; summary: string; category: string; content: string;
}
export type BlogPost = DraftPost & { id: string; createdAt: number }
