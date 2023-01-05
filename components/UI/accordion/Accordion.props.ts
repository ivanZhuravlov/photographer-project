export interface AccordionPropsItemText {
  question: string;
  answer: string;
}

export interface AccordionPropsItem {
  faq: AccordionPropsItemText;
  active: boolean;
  onToggle: () => void;
  className: string;
}

export interface AccordionProps {
  faqs: AccordionPropsItemText[];
  className: string;
}
