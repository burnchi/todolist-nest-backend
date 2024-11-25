import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from 'src/todo/create-todo.dto';
import { TodoService } from 'src/todo/todo.service';
import { UpdateTodoDto } from 'src/todo/update-todo.dto';

// @UseFilters(new HttpExceptionFilter())
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    this.isPositiveInteger(id);
    return this.todoService.getTodoById(+id);
  }

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Delete(':id')
  async deleteTodoById(@Param('id') id: string) {
    this.isPositiveInteger(id);
    return this.todoService.deleteTodoById(+id);
  }

  @Put(':id')
  async updateTodoById(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    this.isPositiveInteger(id);
    return this.todoService.updateTodoById(+id, updateTodoDto);
  }

  // check if id is an integer
  isPositiveInteger(id: string) {
    if (!/^[1-9]\d*$/.test(id)) {
      throw new HttpException('id must be an integer', 400);
    }
  }
}
