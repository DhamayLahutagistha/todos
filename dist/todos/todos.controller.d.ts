import { TodosService } from './todos.service';
import type { Todo } from './todo.model';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    getAll(): Promise<{
        status: string;
        status_code: number;
        message: string;
        data: Todo[];
    }>;
    getById(id: number): Todo;
    create(title: string): Todo;
    update(id: number, title: string, status: 'pending' | 'done'): Todo;
    delete(id: number): void;
}
