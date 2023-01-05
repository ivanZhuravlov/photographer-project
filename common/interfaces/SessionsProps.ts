import { FrequentlyQuestionItem } from "@/components/sections/FrequentlyQuestions/FrequentlyQuestions.props";
import { QuestionItem } from "components/sections/Questions/Questions.props";

export interface SessionItem {
  id: number;
  name: string;
  price: number;
  number_of_images: number;
  min_duration: number;
  max_duration: number;
  created_at: Date;
  updated_at: Date;
}

export interface SessionsProps extends Record<string, unknown> {
  sessions: SessionItem[];
  withSteps?: boolean;
}

export interface PricingProps extends SessionsProps {
  questions: QuestionItem[];
  faqs: FrequentlyQuestionItem[];
}

export interface SessionStepsItem extends Record<string, unknown> {
  id?: number;
  text?: string;
}

export interface SessionSteps extends Record<string, unknown> {
  id: number;
  content_array: SessionStepsItem[];
  title: string;
  created_at: Date;
  updated_at: Date;
}
