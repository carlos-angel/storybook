import './myLabel.css';

export interface MyLabelProps {
  /**
   * Este es el mensaje ha mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
}

export default function MyLabel({ label = 'No label', size = 'normal' }: MyLabelProps) {
  return <span className={`${size}`}>{label}</span>;
}
