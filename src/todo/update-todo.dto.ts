import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from 'src/todo/create-todo.dto';
export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
