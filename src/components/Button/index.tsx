import './style.css'

interface ButtonProps {
  children?: any;
  del?: boolean;
  onClick?: () => void;
}

export function Button({ children, del, onClick}: ButtonProps) {

  return <button className={`${del ? 'button-student__del' : ''} button-student`} onClick={onClick}>
    {children}
  </button>
}