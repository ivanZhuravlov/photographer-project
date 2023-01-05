import { ReactNode } from "react";

export default interface DefaultLayoutProps {
  children: ReactNode;
  withSupport?: boolean;
  withBookSessionBtn?: boolean;
  headerType?: string;
}
