
class Project {
  constructor (title) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
    this.createDate = new Date();
    this.lastVisited = new Date();
    this.todos = [];
  }

  get getId() {
    return this.id;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

}


export default Project;
