import axios from "axios";

export async function getAllStudents() {
  const { data } = await axios.get('/students');

  return data;
}