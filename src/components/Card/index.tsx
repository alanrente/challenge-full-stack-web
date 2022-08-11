import { CardProps } from "./index.types";

export function Card({student, children, key}: CardProps) {

  return (
    <div key={key} className="container-card">
      <label>RA: {student.ra}</label>
      <label>CPF: {student.cpf}</label>
      <label>Nome: {student.nome}</label>
      <label>Email: {student.email}</label>
      {children}
    </div>
  );

}