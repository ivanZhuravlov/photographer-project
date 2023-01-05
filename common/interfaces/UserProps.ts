export interface UserProps extends Record<string, unknown> {
  role_id?: number;
  email?: string;
  updated_at?: Date;
  created_at?: Date;
  id?: number;
}
