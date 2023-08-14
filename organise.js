// Working out logic of app

// All the projects will be stored in an array called - allProjects
// The array will be full of project objects, These objects will have:
// Title, date added, last edited/viewed(advanced), id, array of todos

// Project object will look like:

const allProjects = [];

const project = {
  id: 'number',
  title: 'title',
  createDate: 'date',
  lastViewed: 'date',
  todos: [{todo1}, {todo1}, {todo1}]
}

// Each todo will be part of a project. It will only be able to be created within a project.
// This will help with allocating the todo to the right project. 
// Should the project reference be passed from the dom, or should i keep track of it seperately, like a game logic controller. 
// Each todo will have an id, title, createddate, duedate, priority, description, completed(true/false).
// Each aspect of the todo will be editable - duedate, priority, description, title, completed(true/false). 
// NOTE: class feild declarations help with making class declarations more self-documenting: The feild is always present. 




// Logic for creating a new project. 
// When creating a new project (either clicking the nav link or the card in all projects display) what will happen?
// a modal will Pop up, it will ask for the title of the project.
// if the modal is exited, then the current page will stay as it is (obviously).
// If the form on the modal is completed, the section of the website(whatever it is) will be cleared, and 
// the individual project view will be displayed.
