const todo = {
  todos: [],

  displayTodos: function () {
    console.log(this.todos);
  },

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function (index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },

  toggleCompleted: function (index) {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  deleteTodo: function (index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
};
