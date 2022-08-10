import { useList } from "./index.hook"

export function List() {

  const { students } = useList()

  return <div className=''>
    {students && students.map((student) => Object.keys(student).map((key) => (
        <div>
          <label>{key}: {student[key]}</label>
        </div>
      ))
    )}
  </div>
}