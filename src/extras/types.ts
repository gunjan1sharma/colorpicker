export interface PickerCardProps {
  heading: string;
  description: string;
  openClick: (picker: string) => void;
  knowClick: () => void;
  borderColor: string;
}

export interface SingleColorProps {
  color: string;
  colorValue: any;
  id: string;
  deleteColor: (id: string) => void;
}
