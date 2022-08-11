export type StudentDto = {
  ra: string;
  cpf: string;
  nome: string;
  email: string;
}

export type StudentUpdateDto = {
  ra?: string;
  cpf?: string;
  nome: string;
  email: string;
}