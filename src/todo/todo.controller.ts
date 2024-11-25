import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(+id);
  }

  @Post()
  async createTodo(@Body() createTodoDto: any) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Delete(':id')
  async deleteTodoById(@Param('id') id: string) {
    return this.todoService.deleteTodoById(+id);
  }

  @Put(':id')
  async updateTodoById(@Param('id') id: string, @Body() updateTodoDto: any) {
    return this.todoService.updateTodoById(+id, updateTodoDto);
  }
}
