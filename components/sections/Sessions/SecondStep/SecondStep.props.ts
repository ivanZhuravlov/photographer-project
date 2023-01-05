import {
  Control,
  DeepMap,
  FieldError,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

export type Inputs = {
  email: string;
  accept: boolean;
};

export interface SecondStepProps {
  handleSubmit: UseFormHandleSubmit<Inputs>;
  onSubmitFunc: SubmitHandler<Inputs>;
  errors: DeepMap<Inputs, FieldError>;
  control: Control<Inputs>;
}
