import { ReactNode } from "react";

export interface PageTitleProps {
  title: ReactNode | string;
  desc?: string;
  titleCol?: number;
  isDesc?: boolean;
  hashtags?: Hashtag[];
  className?: string;
}

export interface Hashtag {
  tag: string;
  href: string;
} 
