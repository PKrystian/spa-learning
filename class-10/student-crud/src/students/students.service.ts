import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private maxId = 0;

  create(createStudentDto: CreateStudentDto): Student {
    this.maxId++;
    const newStudent = { id: this.maxId, ...createStudentDto };
    this.students.push(newStudent);
    return newStudent;
  }

  findAll(): Student[] {
    return this.students;
  }

  findOne(id: number): Student {
    const student = this.students.find(student => student.id === id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  update(id: number, updateStudentDto: Partial<CreateStudentDto>): Student {
    const idx = this.findIndexIfExists(id);
    this.students[idx] = { ...this.students[idx], ...updateStudentDto };
    return this.students[idx];
  }

  remove(id: number): void {
    const idx = this.findIndexIfExists(id);
    this.students.splice(idx, 1);
  }

  onModuleInit() {
    this.students.push({ id: ++this.maxId, index: 32480, firstName: 'Łukasz', lastName: 'Kąśliwy' });
    this.students.push({ id: ++this.maxId, index: 32481, firstName: 'Marek', lastName: 'Nowak' });
    this.students.push({ id: ++this.maxId, index: 32482, firstName: 'Zenon', lastName: 'Zawada' });
  }

  private findIndexIfExists(id: number): number {
    const idx = this.students.findIndex(student => student.id === id);
    if (idx === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return idx;
  }

  replace(id: number, studentData: Student): Student {
    const idx = this.findIndexIfExists(id);
    this.students[idx] = { id, ...studentData };
    return this.students[idx];
  }

}
