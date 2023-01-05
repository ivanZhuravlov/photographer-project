export interface AlbumsProps extends Record<string, unknown> {
  galleries: GalleryItem[];
}

export interface GalleryItem {
  id?: number;
  name?: string;
  description?: string;
  cover?: string;
  package?: PackageItem;
  package_id?: number;
  shooting_date?: Date;
  status?: string;
}

export interface PackageItem {
  id: number;
  name: string;
  number_of_images: number;
}
