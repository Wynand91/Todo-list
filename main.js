const todo = {
  todos: [],

  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
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

const handlers = {
  displayTodos: function () {
    todo.displayTodos();
  },

  addTodo: function () {
    const addInputText = document.getElementById('addInput');
    todo.addTodo(addInputText.value);
    addInputText.value = '';
  },

  changeTodo: function () {
    const changeTodoIndex = document.getElementById("changeTodoIndex");
    const changeTodoText = document.getElementById("changeTodotext");
    todo.changeTodo(changeTodoIndex.valueAsNumber, changeTodoText.value);
    changeTodoIndex.value = '';
    changeTodoText.value = '';
  },

  deleteTodo: function () {
    const deleteIndex = document.getElementById("deleteIndex");
    todo.deleteTodo(deleteIndex.valueAsNumber);
    deleteIndex.value = '';
  },

  toggleCompleted: function () {
    const toggleIndex = document.getElementById("toggleCompletedIndex");
    todo.toggleCompleted(toggleIndex.valueAsNumber);
    toggleIndex.value = '';
  },

  toggleAll: function () {
    todo.toggleAll();
  }
};
