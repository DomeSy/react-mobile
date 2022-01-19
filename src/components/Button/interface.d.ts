
export interface IndexProps extends ButtonProps {
  lock?:boolean
}

interface ButtonProps {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  block?: boolean;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  onClick?: any
  type?: 'submit' | 'reset' | 'button';
  shape?: 'default' | 'rounded' | 'rectangular';
}
