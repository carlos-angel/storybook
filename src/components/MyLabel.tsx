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
  /**
   * capitaliza el mensaje de la etiqueta
   */
  allCaps?: boolean;
  /**
   * color básicos del mensaje de la etiqueta
   */
  color?: 'primary' | 'secondary' | 'tertiary';
}

export default function MyLabel({
  allCaps = false,
  color = 'primary',
  label = 'No label',
  size = 'normal',
}: MyLabelProps) {
  const message = allCaps ? label.toUpperCase() : label;
  return <span className={`label ${size} text-${color}`}>{message}</span>;
}
