import { GalleryItem } from "page-components/Albums/Albums.props";

export interface AlbumGalleryProps extends GalleryItem {
  photos?: PhotoItem[];
}

export interface PhotoItem {
  id: number;
  name: string;
  session_id: number;
  is_selected: boolean;
  created_at: Date;
  updated_at: Date;
}
