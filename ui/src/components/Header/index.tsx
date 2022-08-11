import { Typography } from 'antd';
import { Button } from 'components/Button';
import { useModalAntdContext } from 'hooks/useModalAntdContext';
import './index.style.css'

export function Header(){

  const { showModal } =useModalAntdContext();

  return (
    <div className="header-student">
      <Typography.Title className="header-student__title">Sistema de cadastro de alunos</Typography.Title>
      <div className="header-student__button">
        <Button onClick={showModal}>Cadastrar aluno</Button>
      </div>
    </div>
  );
}