import { Todo } from './todo.model';
export declare class TodosService {
    private todos;
    private nextId;
    findAll(): Todo[];
    findOne(id: number): Todo;
    create(title: string): Todo;
    update(id: number, title?: string, status?: 'pending' | 'done'): Todo;
    remove(id: number): void;
}
