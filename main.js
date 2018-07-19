const todo = {
  todos: [],

  displayTodos: function () {

    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed === true) {
          console.log("(X) " + this.todos[i].todoText);
        } else {
          console.log("() " + this.todos[i].todoText);
        }

      }
    }

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

  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    //if all todos are completed, change all to false(not completed)
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
        }

    //if all todos are not completed, change all to true(everything completed)
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
        }
    }

    this.displayTodos();

  }
};
