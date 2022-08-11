import { useEffect, useState } from "react";
import { getAllStudents } from "services/list-students.service";
import { StudentDto } from "./index.types";

export function useList(){

  const [students, setStudents] = useState<StudentDto[]>([]);

  async function getStudents(){
    const _students: StudentDto[] = await getAllStudents();

    setStudents(_students);
  }

  useEffect(() => {
    getStudents()
  }, []);

  return { students, getStudents }

}