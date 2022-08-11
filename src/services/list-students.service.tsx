import axios from "axios";

export async function getAllStudents() {
  const { data } = await axios.get('/students');

  return data;
}

export async function getStudentByRA(ra: string) {
  const { data } = await axios.get(`/students/:${ra}`);

  return data;
}