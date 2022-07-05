import { Categories } from "@app/shared/models";

export class BlogPost {
  count: number;
  next: string;
  previous: string;
  results: Posts[];
}

export class Posts{
  id?: number;
  title?: string;
  slug?: string;
  body_content?: string;
  created?: string;
  post_image?: string;
  category?: Categories[];
}
