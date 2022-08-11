import { CardProps } from "./index.types";
import './style.css'

export function Card({student, children}: CardProps) {

  return (
    <div className="container-card">
      <div className="container-card__contents">
        <label>RA: {student.ra}</label>
        <label>CPF: {student.cpf}</label>
        <label>Nome: {student.nome}</label>
        <label>Email: {student.email}</label>
      </div>
      <div className="container-card__buttons">
        {children}
      </div>
    </div>
  );

}