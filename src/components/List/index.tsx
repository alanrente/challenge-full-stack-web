import { useList } from "./index.hook"

export function List() {

  const { students } = useList()

  return <div className=''>
    {students && students.map((student) => 
        <div>
          <label>RA: {student.ra}</label>
          <label>CPF: {student.cpf}</label>
          <label>Nome: {student.nome}</label>
          <label>Email: {student.email}</label>
        </div>
    )}
  </div>
}