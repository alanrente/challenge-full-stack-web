import { Button } from "components/Button"
import { useModalAntdContext } from "hooks/useModalAntdContext"
import { useList } from "./index.hook"

export function List() {

  const { students } = useList()

  const { showModal } = useModalAntdContext();

  return <div className=''>
    {students && students.map((student, i) => 
        <div key={i}>
          <label>RA: {student.ra}</label>
          <label>CPF: {student.cpf}</label>
          <label>Nome: {student.nome}</label>
          <label>Email: {student.email}</label>
          
          <Button onClick={() => showModal && showModal(student.ra)}>Editar</Button>
          <Button del>Deletar</Button>
        </div>
    )}
  </div>
}