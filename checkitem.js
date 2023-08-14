class Checkitem {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.id = this.id = Math.random().toString(36).substr(2, 9);
  }

  toggleComplete() {
    if (this.completed) {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }

}

export default Checkitem;