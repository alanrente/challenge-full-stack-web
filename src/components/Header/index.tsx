import { Button } from 'components/Button';
import { useModalAntdContext } from 'hooks/useModalAntdContext';
import './index.style.css'

export function Header(){

  const { showModal } =useModalAntdContext();

  return (
    <div className="header-student">
      <Button onClick={showModal}>Cadastrar aluno</Button>
    </div>
  );
}