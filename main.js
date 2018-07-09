const todo = {
  todos: ['eet', 'code', 'slaap'],

  displayTodos: function () {
    console.log(this.todos);
  },

  addTodo: function (task) {
    this.todos.push(task);
    this.displayTodos();
  },

  changeTodo: function (index, newTask) {
    this.todos[index] = newTask;
    this.displayTodos();
  },

  deleteTodo: function (index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
};
