import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getTodos() {
    const todos = await this.prisma.todo.findMany();
    return todos;
  }

  async getTodoById(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: { id },
    });
    return todo;
  }

  async createTodo(data: any) {
    const todo = await this.prisma.todo.create({
      data: {
        title: data.title,
        completed: data.completed,
      },
    });
    return todo;
  }

  async deleteTodoById(id: number) {
    // check if todo exists
    await this.getTodoById(id);
    console.log('calling delete');
    const todo = await this.prisma.todo.delete({
      where: { id },
    });
    return todo;
  }

  async updateTodoById(id: number, data: any) {
    // check if todo exists
    await this.getTodoById(id);
    const todo = await this.prisma.todo.update({
      where: { id },
      data: {
        title: data.title,
        completed: data.completed,
      },
    });
    return todo;
  }
}
