import { Categories } from "@app/shared/models";

export class BlogPost {
  id?: number;
  title?: string;
  slug?: string;
  body_content?: string;
  created?: string;
  post_image?: string;
  category?: Categories[];
}
