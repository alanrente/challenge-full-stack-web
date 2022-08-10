import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) {}

  async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepository.save(createStudentDto).catch((err) => {
      throw new BadRequestException(err.message);
    });
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(ra: string) {
    return await this.studentRepository.findOneOrFail({ where: { ra } }).catch(() => {
      throw new NotFoundException(`Student not found`);
    });
  }

  async update(ra: string, updateStudentDto: UpdateStudentDto) {
    await this.studentRepository.update(ra, updateStudentDto).catch((err) => {
      throw new BadRequestException(err.message);
    });
  }

  async remove(ra: string) {
    await this.studentRepository.delete(ra);
  }
}
