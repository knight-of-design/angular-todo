import { Todo } from '../models/todo.model';

export namespace TodoAction {
  export class Add {
    static readonly type = '[Todo] Add Todo';
    constructor(public todo: Todo) { }
  }

  export class Edit {
    static readonly type = '[Todo] Edit Todo';
  }

  export class Load {
    static readonly type = '[Todo] Load Todos';
    constructor(public todos: Todo[]) { }
  }
}
