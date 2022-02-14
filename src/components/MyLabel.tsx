import './myLabel.css';

export interface MyLabelProps {
  label: string;
  size: 'normal' | 'h1' | 'h2' | 'h3';
}

export default function MyLabel({ label = 'No label', size = 'normal' }: MyLabelProps) {
  return <span className={`${size}`}>{label}</span>;
}
