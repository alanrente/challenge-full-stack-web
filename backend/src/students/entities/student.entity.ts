import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tb_student' })
export class Student {
  @PrimaryColumn({ type: 'character', length: 6, unique: true })
  ra: string;
  @Column({ type: 'varchar' })
  nome: string;
  @Column({ length: 11 })
  cpf: string;
  @Column({ type: 'varchar' })
  email: string;
}
