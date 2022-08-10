import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class CreateStudentDto {
  @MinLength(6, {
    message: 'RA must be than equal to 6 characters',
  })
  @MaxLength(6, {
    message: 'RA must be than equal to 6 characters',
  })
  ra: string;

  nome: string;

  @MinLength(11, {
    message: 'CPF must be than equal to 11 characters',
  })
  @MaxLength(11, {
    message: 'CPF must be than equal to 11 characters',
  })
  cpf: string;

  @IsEmail()
  email: string;
}
