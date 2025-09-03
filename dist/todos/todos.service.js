"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = class TodosService {
    todos = [];
    nextId = 1;
    findAll() {
        return this.todos;
    }
    findOne(id) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo)
            throw new common_1.NotFoundException(`Todo dengan ID ${id} tidak ditemukan`);
        return todo;
    }
    create(title) {
        const newTodo = {
            id: this.nextId++,
            title,
            status: 'pending',
        };
        this.todos.push(newTodo);
        return newTodo;
    }
    update(id, title, status) {
        const todo = this.findOne(id);
        if (title)
            todo.title = title;
        if (status)
            todo.status = status;
        return todo;
    }
    remove(id) {
        const index = this.todos.findIndex(t => t.id === id);
        if (index === -1)
            throw new common_1.NotFoundException(`Todo dengan ID ${id} tidak ditemukan`);
        this.todos.splice(index, 1);
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map