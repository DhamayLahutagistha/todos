import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import type { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
    async  getAll() {
    return{

        status : 'success',
        status_code: 200,
        message: 'data berhasil diambil',
        data: await this.todosService.findAll()
    }
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): Todo {
    return this.todosService.findOne(id);
  }

  @Post()
  create(@Body('title') title: string): Todo {
    return this.todosService.create(title);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
    @Body('status') status: 'pending' | 'done',
  ): Todo {
    return this.todosService.update(id, title, status);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): void {
    return this.todosService.remove(id);
  }
}