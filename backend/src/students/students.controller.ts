import { Controller, Get, Post, Body, Param, Delete, BadRequestException, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { validateOrReject } from 'class-validator';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    const validatedStudent = new CreateStudentDto();

    Object.keys(createStudentDto).forEach((key) => {
      validatedStudent[key] = createStudentDto[key];
    });

    await validateOrReject(validatedStudent).catch((errors) => {
      throw new BadRequestException(errors.map(({ constraints }) => constraints));
    });

    return await this.studentsService.create(validatedStudent);
  }

  @Get()
  async findAll() {
    return await this.studentsService.findAll();
  }

  @Get(':ra')
  async findOne(@Param('ra') ra: string) {
    return await this.studentsService.findOne(ra);
  }

  @Put(':ra')
  async update(@Param('ra') ra: string, @Body() updateStudentDto: UpdateStudentDto) {
    await this.studentsService.findOne(ra);

    const fieldNotEditable = Object.keys(updateStudentDto).find((key) => key === 'ra' || key === 'cpf');

    if (fieldNotEditable) throw new BadRequestException(`Field ${fieldNotEditable} cannot editable`);

    const validatedStudentUpdate = new UpdateStudentDto();

    Object.keys(updateStudentDto).forEach((key) => {
      validatedStudentUpdate[key] = updateStudentDto[key];
    });

    await validateOrReject(validatedStudentUpdate).catch((errors) => {
      throw new BadRequestException(errors.map(({ constraints }) => constraints));
    });

    await this.studentsService.update(ra, validatedStudentUpdate);

    return await this.findOne(ra);
  }

  @Delete(':ra')
  async remove(@Param('ra') ra: string) {
    await this.studentsService.findOne(ra);

    await this.studentsService.remove(ra);

    return { message: `ra: ${ra} deleted` };
  }
}
