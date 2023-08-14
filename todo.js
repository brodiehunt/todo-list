class Todo {
  constructor (title, description, dueDate, priority) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = false;
    this.checklist = [];
    this.createDate = new Date();
    this.dueDate = dueDate;
  }

  addCheckItem(newCheckItem) {
    this.checklist.push(newCheckItem)
  }

  deleteCheckItem(checkItemId) {
    this.checklist = this.checklist.filter((checkItem) => checkItem.id !== checkItemId);
  }

  toggleComplete() {
    if (this.completed) {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }

  editDescription(newDescription) {
    this.description = newDescription;
  }

  editDueDate(newDate) {
    this.dueDate = newDate;
  }

  editPriority(newPriority) {
    this.priority = newPriority;
  }
}

export default Todo;