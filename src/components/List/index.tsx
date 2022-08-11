import { Button } from "components/Button"
import { Card } from "components/Card";
import { useModalAntdContext } from "hooks/useModalAntdContext"
import { useList } from "./index.hook"

export function List() {

  const { students } = useList()

  const { showModal } = useModalAntdContext();

  return <div className=''>
    {students && students.map((student, i) => 
      <Card 
        key={i}
        student={student}>     
        <Button onClick={() => showModal && showModal(student.ra)}>Editar</Button>
        <Button del>Deletar</Button>
      </Card>
    )}
  </div>
}