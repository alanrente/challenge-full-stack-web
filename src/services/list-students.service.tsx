import axios from "axios";
import { StudentUpdateDto } from "components/List/index.types";

export async function getAllStudents() {
  const { data } = await axios.get('/students');

  return data;
}

export async function getStudentByRA(ra: string) {
  const { data } = await axios.get(`/students/${ra}`);

  return data;
}

export async function updateStudent(ra: string, payload: StudentUpdateDto) {
  const { data } = await axios.put(`/students/${ra}`, payload);

  return data;
}