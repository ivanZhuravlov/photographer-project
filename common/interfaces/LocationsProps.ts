import { FrequentlyQuestionItem } from "@/components/sections/FrequentlyQuestions/FrequentlyQuestions.props";
import { QuestionItem } from "@/components/sections/Questions/Questions.props";

export interface LocationItem {
  cover: string;
  created_at: Date;
  date: string;
  description: string;
  end_time: Date;
  id: number;
  is_active: number;
  is_cover: number;
  location_id: number;
  price: number;
  name: string;
  start_time: Date;
  updated_at: Date;
  sessions: LocationSelect[];
  location_images: LocationSliderImg[];
}

export interface LocationSliderImg {
  id: number;
  location_id: number;
  name: string;
  is_cover: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface LocationSelect {
  intervals: SessionItem[];
  time: string;
}

export interface SessionItem {
  start: string;
  end: string;
  isOrdered: boolean;
}

export interface LocationsProps extends Record<string, unknown> {
  locations: LocationItem[];
}

export interface LocationsRequest extends LocationsProps {
  questions: QuestionItem[];
  faqs: FrequentlyQuestionItem[];
}
