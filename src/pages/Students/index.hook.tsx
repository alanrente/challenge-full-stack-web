import { useEffect, useState } from "react";
import { getAllStudents } from "services/list-students.service";

export function useListStudents(){

  const [students, setStudents] = useState<any[]>([]);

  async function getStudents(){
    const _students = await getAllStudents();

    setStudents(_students);
  }

  useEffect(() => {
    getStudents()
  }, []);

  return {students, getStudents}

}