import { useListStudents } from './index.hook'
import './index.style.css'

export function Students(){

  const { students } = useListStudents()

  return <div className='list-students'>
    {students && students.map((student) => Object.keys(student).map((key) => (
        <div>
          <label>{key}: {student[key]}</label>
        </div>
      ))
    )}
  </div>
}