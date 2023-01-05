export interface HistoryTableProps {
  columns: ColumnItem[];
  fields: FieldItem[];
}

export interface ColumnItem {
  field: string | keyof FieldItem;
  statusField?: boolean;
  package?: boolean;
}

interface IFieldItemKeys {
  [key: string]: string | number | IPackage | null | Date;
}

interface IPackage {
  name: string;
  id: number;
}

export interface FieldItem extends IFieldItemKeys {
  id: number;
  status: string;
  name: string;
  ordering_date: Date;
  shooting_date: string | null;
  uploading_date: string | null;
  package_id: number;
  package: IPackage;
}
