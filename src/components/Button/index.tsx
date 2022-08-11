import './style.css'

interface ButtonProps {
  children?: any;
  cancelar?: boolean;
  onClick?: () => void;
}

export function Button({ children, cancelar, onClick}: ButtonProps) {

  return <button className={`${cancelar ? 'button-student__cancelar' : ''} button-student`} onClick={onClick}>
    {children}
  </button>
}