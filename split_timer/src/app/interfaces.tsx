export interface InputProps {
  type: string;
  handleChange: Function;
}

export interface ToggleButtonProps {
  initialText: string;
  alternateText: string;
  onToggle: Function;
}

export interface InputChangeProps {
  type: string;
  value: number;
}

export interface InputValueProps {
  hot: number;
  cold: number;
}
