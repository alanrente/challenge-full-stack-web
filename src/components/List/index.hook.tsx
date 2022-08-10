import { useEffect, useState } from "react";
import { getAllStudents } from "services/list-students.service";
import { StudentsDto } from "./index.types";

export function useList(){

  const [students, setStudents] = useState<StudentsDto[]>([]);

  async function getStudents(){
    const _students: StudentsDto[] = await getAllStudents();

    setStudents(_students);
  }

  useEffect(() => {
    getStudents()
  }, []);

  return {students, getStudents}

}