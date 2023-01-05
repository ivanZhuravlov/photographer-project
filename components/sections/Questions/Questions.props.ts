import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface QuestionItem {
  number: string;
  title: string;
  desc: string;
}

export interface QuestionsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sectionTitle: ReactNode;
  img: string;
  imgWebp?: string;
  questions: QuestionItem[];
}

export interface QuestionsRequestProps {
  id: number;
  title: string;
  content_array: QuestionItem[];
  created_at: Date;
  updated_at: Date;
}
