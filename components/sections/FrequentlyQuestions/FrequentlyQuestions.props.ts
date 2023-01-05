export interface FrequentlyQuestionItem {
  question: string;
  answer: string;
}

export interface FrequentlyQuestionsRequest {
  id: number;
  title: string;
  content_array: FrequentlyQuestionItem[];
  created_at: Date;
  updated_at: Date;
}

export interface FrequentlyQuestionsProps {
  faqs: FrequentlyQuestionItem[];
}
