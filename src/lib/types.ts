export type QuoteBuilderFormSchema = {
  component: string; // Need to become enum of available components
  id: string;
  props?: BaseHeadingProps | BaseInputTextProps | BaseInputSelectProps | []; // Etc...
  validation?: ValidationRule[];
  show_if?: {
    operator: 'and'|'or',
    rules: ShowIfRule[];
  }
  children?: QuoteBuilderFormSchema[];
}

export type BaseHeadingProps = {
  level: number;
  text: string;
}

interface BaseInputProps {
  label: string;
  hint ?: string;
  placeholder ?: string;
}

export type BaseInputTextProps = BaseInputProps

type BaseInputSelectOptionProps = {
  value: string;
  label: string;
}

export type BaseInputSelectProps = BaseInputProps & {
  options: BaseInputSelectOptionProps[];
}

type ValidationRule = {
  rule: string; // Needs to become Enum,
  message?: string; // To override the default validation error message for this rule
}

type ShowIfRule = {
  field: string;
  operator: 'equals' | 'greater_than' | 'less_than' |'greater_than_or_equals_to'; // Etc...
  value: string|number;
}