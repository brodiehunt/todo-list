import Todo from './todo.js';
import Project from './project.js';


const displayController = (() => {

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sideBar = document.querySelector('.side-nav');
  const contentEl = document.querySelector('.content');

  hamburgerBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
  });

  const clearContent = () => {
      contentEl.innerHTML = '';
  };


  // New Project modal/ form
  const projectModal = () => {

    const projectModalEl = document.createElement('div');
    projectModalEl.classList.add('project-modal');
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.innerText = 'Create Your Project';
    // form
    const projectForm = document.createElement('form');
    projectForm.id = 'project-form';
    projectForm.classList.add('project-form');
    // title input
    // const titleLabel = document.createElement('label');
    // titleLabel.setAttribute('for', 'title');
    // titleLabel.innerText = "Title";
    const titleInput = document.createElement('input');
    titleInput.id = 'title';
    titleInput.classList.add('form-title', 'project');
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Project title");
    titleInput.setAttribute('required', 'true');
    // submit btn
    const submitBtn = document.createElement("input");
    submitBtn.classList.add('form-submit', "project")
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Create Project");
    // exit btn
    const exitBtn = document.createElement('i');
    exitBtn.classList.add('modal-exit', 'bx', 'bx-x');
    // link together, append to dom
    // projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(submitBtn);
    projectModalEl.appendChild(exitBtn);
    projectModalEl.appendChild(modalTitle);
    projectModalEl.appendChild(projectForm);
    contentEl.appendChild(projectModalEl);

    return { 
      exitBtn,
      projectForm,
      projectModalEl
    };
  }

  // Project card link that activates new project modal
  const newProjectCard = () => {

    let newProjectCard = document.createElement('div');
    newProjectCard.classList.add('project-card', 'create');
    let newProjectIcon = document.createElement('i');
    newProjectIcon.classList.add('bx', 'bx-plus', 'new-project-icon');
    let cardTitle = document.createElement('h2');
    cardTitle.classList.add('create-project', 'title');
    cardTitle.innerText = 'New Project';
    cardTitle.appendChild(newProjectIcon);
    newProjectCard.appendChild(cardTitle);
    return newProjectCard;
  }

  // project card link that takes you to individual project page
  const projectCard = (title) => {
    
    let projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    let cardTitle = document.createElement('h2');
    cardTitle.classList.add('project-card-title');
    cardTitle.innerText = title;
    projectCard.appendChild(cardTitle);
    return projectCard;
  }

  // all projects page, clears previous content, creates container for cards
  const allProjects = () => {

    clearContent();
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('card-container');
    projectsContainer.append
    contentEl.appendChild(projectsContainer);
    return projectsContainer;
  }
  
  // New todo modal/form
  const newTodoModal = () => {

    const projectModalEl = document.createElement('div');
    projectModalEl.classList.add('todo-modal');
    const newTodoForm = document.createElement('form');
    newTodoForm.classList.add('new-todo-form');
    const modalTitle = document.createElement('h2');
    modalTitle.innerText = 'New Todo';
    // Todo title
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('input-container');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.classList.add('title-label');
    titleLabel.innerText = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('placeholder', 'Todo title');
    titleInput.setAttribute('required', 'true');
    titleInput.classList.add('form-control', 'title-input', 'unset');
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);
    // Todo description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('input-container');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.classList.add('description-label');
    descriptionLabel.innerText = 'Description';
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('id', 'description')
    descriptionInput.setAttribute('placeholder', 'Todo Description');
    descriptionInput.setAttribute('required', 'true');
    descriptionInput.classList.add('form-control', 'description-input', 'unset');
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);
    // Todo Priority
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('input-container');
    const selectLabel = document.createElement('label');
    selectLabel.innerText = 'Todo Priority';
    selectLabel.setAttribute('for', 'priority');
    const selectInput = document.createElement('select');
    selectInput.setAttribute('id', 'priority');
    selectInput.setAttribute('name', 'priority');
    selectInput.setAttribute('required', 'true');
    selectInput.classList.add('form-control', 'priority-input');
    const optionOne = document.createElement('option');
    optionOne.innerText = 'Low';
    optionOne.setAttribute('value', 'low');
    const optionTwo = document.createElement('option');
    optionTwo.innerText = 'Medium';
    optionTwo.setAttribute('value', 'Medium');
    const optionThree = document.createElement('option');
    optionThree.innerText = 'High';
    optionThree.setAttribute('value', 'High');
    selectInput.appendChild(optionOne);
    selectInput.appendChild(optionTwo);
    selectInput.appendChild(optionThree);
    priorityContainer.appendChild(selectLabel);
    priorityContainer.appendChild(selectInput);
    // Todo Due Date
    const dateContainer = document.createElement('div');
    dateContainer.classList.add('input-container');
    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Due Date';
    dateLabel.setAttribute('for', 'dueDate');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'dueDate');
    dateInput.setAttribute('name', 'dueDate');
    dateInput.setAttribute('required', 'true');
    dateInput.classList.add('form-control', 'date-input', 'unset');
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);
    const columnContainer = document.createElement('div');
    columnContainer.classList.add('column-container');
    columnContainer.appendChild(priorityContainer);
    columnContainer.appendChild(dateContainer);
    // todo submit
    const submitBtn = document.createElement("input");
    submitBtn.classList.add('form-submit', "Todo")
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Add Todo");
    // Todo exit 
    const exitBtn = document.createElement('i');
    exitBtn.classList.add('modal-exit', 'bx', 'bx-x');
    // Append elements to form and then container;
    newTodoForm.appendChild(titleContainer);
    newTodoForm.appendChild(descriptionContainer);
    newTodoForm.appendChild(columnContainer);
    newTodoForm.appendChild(submitBtn);
    projectModalEl.appendChild(modalTitle);
    projectModalEl.appendChild(newTodoForm);
    projectModalEl.appendChild(exitBtn);
    contentEl.appendChild(projectModalEl);
    console.log('new todo modal display function finished');
    return {
      newTodoForm,
      projectModalEl,
      exitBtn
    }
  };

  // single project display. When individual project card is clicked/project is created
  const singleProject = (project) => {

    clearContent();
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    // project title el
    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('page-title', 'project');
    projectTitle.innerText = project.title;
    // clickable div to open new todo modal
    const newTodoButton = document.createElement('button');
    newTodoButton.classList.add('new-todo-btn');
    newTodoButton.innerHTML = `<i class='bx bx-plus icon'></i> <span>Add Todo</span>`
    const newTodoContainer = document.createElement('div');
    newTodoContainer.classList.add('new-todo-container');
    newTodoContainer.appendChild(newTodoButton);
    // container that holds individual todos
    const allTodosContainer = document.createElement('div');
    allTodosContainer.classList.add('todos-container');
    // link together
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(newTodoContainer);
    projectContainer.appendChild(allTodosContainer);
    contentEl.appendChild(projectContainer);

    return {
      newTodoButton,
      projectContainer
    }
  }

  const todayTodos = () => {
    clearContent();
    const todayTodosContainer = document.createElement('div');
    todayTodosContainer.classList.add('today-container');

    const todayTitle = document.createElement('h2');
    todayTitle.classList.add('page-title');
    todayTitle.innerText = 'Todays Todos';
    todayTodosContainer.appendChild(todayTitle);

    contentEl.appendChild(todayTodosContainer);

    return todayTodosContainer;
  }

  const weekTodos = () => {
    clearContent();
    const weekTodosContainer = document.createElement('div');
    weekTodosContainer.classList.add('week-container');

    const weekTitle = document.createElement('h2');
    weekTitle.classList.add('page-title');
    weekTitle.innerText = 'This Weeks Todos';
    weekTodosContainer.appendChild(weekTitle);

    contentEl.appendChild(weekTodosContainer);

    return weekTodosContainer;
  }

  const clearAndReturnTodoContainer = () => {

    let todoContainer = document.querySelector('.todos-container');
    todoContainer.innerHTML = '';
    return todoContainer;
  }

  // single todo - list form 
  const singleTodo = (title, description, completed, dueDate, container) => {

    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    // checkbox el
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('todo-check-container');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('todo-checkbox');
    if (completed) {
      checkBox.setAttribute('checked', 'true');
    }
    leftContainer.appendChild(checkBox);
    // title and description el
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    const titleEl = document.createElement('h3');
    titleEl.classList.add('todo-title');
    titleEl.innerText = title;
    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('todo-description');
    descriptionEl.innerText = description;
    textContainer.appendChild(titleEl);
    textContainer.appendChild(descriptionEl);
    const dueDateEl = document.createElement('span');
    dueDateEl.classList.add('due-date');
    dueDateEl.innerText = `Due: ${dueDate}`;
    textContainer.appendChild(dueDateEl);
    // delete icon el
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('delete-todo-container');
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('bx', 'bx-trash', 'todo-trash');
    rightContainer.appendChild(trashIcon);
    // link together
    todoContainer.appendChild(leftContainer);
    todoContainer.appendChild(textContainer);
    todoContainer.appendChild(rightContainer);
    container.appendChild(todoContainer);

    return {
      textContainer,
      checkBox,
      trashIcon,
      todoContainer
    }
  }

  // editable modal view of single todo item
  const singleTodoExpandedView = (todo) => {
    const todoModal = document.createElement('div');
    todoModal.classList.add('todo-modal');
    // Title
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('input-container');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('id', 'title');
    titleLabel.classList.add('title-label');
    titleLabel.innerText = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('value', todo.title);
    titleInput.classList.add('title-input', 'form-control', 'unset');
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);
    // Description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('input-container');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('id', 'description');
    descriptionLabel.classList.add('description-label');
    descriptionLabel.innerText = 'Description';
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'description')
    descriptionInput.setAttribute('value', todo.description)
    descriptionInput.classList.add('description-input', 'form-control', 'unset');
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);
    // Checklist
    const checklistContainer = document.createElement('div');
    checklistContainer.classList.add('input-container', 'checklist-container');
    const checklistLabel = document.createElement('label');
    checklistLabel.classList.add('checklist-label');
    checklistLabel.innerText = 'Todo checklist';
    const addChecklistInput = document.createElement('input');
    addChecklistInput.classList.add('checklist-input', 'form-control', 'unset');
    addChecklistInput.setAttribute('placeholder', 'add checklist item');
    checklistContainer.appendChild(checklistLabel);
    checklistContainer.appendChild(addChecklistInput)
    // Priority
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('input-container');
    const selectLabel = document.createElement('label');
    selectLabel.innerText = 'Todo Priority';
    selectLabel.setAttribute('for', 'priority');
    selectLabel.classList.add('select-label');
    const selectInput = document.createElement('select');
    selectInput.setAttribute('id', 'priority');
    selectInput.setAttribute('name', 'priority');
    selectInput.classList.add('priority-input', 'form-control')
    const optionOne = document.createElement('option');
    optionOne.innerText = 'Low';
    optionOne.setAttribute('value', 'Low');
    if (todo.priority === 'Low') {
      optionOne.setAttribute('selected', 'true');
    }
    const optionTwo = document.createElement('option');
    optionTwo.innerText = 'Medium';
    optionTwo.setAttribute('value', 'Medium');
    if (todo.priority === 'Medium') {
      optionTwo.setAttribute('selected', 'true');
    }
    const optionThree = document.createElement('option');
    optionThree.innerText = 'High';
    optionThree.setAttribute('value', 'High');
    if (todo.priority === 'High') {
      optionThree.setAttribute('selected', 'true');
    }
    selectInput.appendChild(optionOne);
    selectInput.appendChild(optionTwo);
    selectInput.appendChild(optionThree);
    priorityContainer.appendChild(selectLabel);
    priorityContainer.appendChild(selectInput);

    // Todo Due Date
    const dateContainer = document.createElement('div');
    dateContainer.classList.add('input-container');
    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Due Date';
    dateLabel.setAttribute('for', 'dueDate');
    dateLabel.classList.add('date-label');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'dueDate');
    dateInput.setAttribute('name', 'dueDate');
    dateInput.setAttribute('value', todo.dueDate);
    dateInput.classList.add('date-input', 'form-control', 'unset');
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);
    // container to split due date and priority into two columns;
    const columnContainer = document.createElement('div');
    columnContainer.classList.add('column-container');
    columnContainer.appendChild(priorityContainer);
    columnContainer.appendChild(dateContainer);
    // exit modal button
    const exitBtn = document.createElement('i');
    exitBtn.classList.add('modal-exit', 'bx', 'bx-x');
    // link together
    todoModal.appendChild(titleContainer);
    todoModal.appendChild(descriptionContainer);
    todoModal.appendChild(checklistContainer);
    todoModal.appendChild(columnContainer);
    todoModal.appendChild(exitBtn);
    contentEl.appendChild(todoModal);

    return {
      exitBtn,
      todoModal,
      dateInput,
      selectInput,
      descriptionInput,
      addChecklistInput,
      titleInput,
      checklistContainer
    }
  }

  // build individual checklist item and append to container
  const singleChecklistItem = (checkItem, checklistContainer) => {

    const checkItemContainer = document.createElement('div');
    checkItemContainer.classList.add('checkitem-container');
    // check item checkbox
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('checkitem-check-container');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('checkitem-checkbox');
    if (checkItem.completed) {
      checkBox.setAttribute('checked', 'true');
    }
    leftContainer.appendChild(checkBox);
    // check item description
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('checkitem-description');
    descriptionEl.innerText = checkItem.description;
    textContainer.appendChild(descriptionEl);
    // check item delete 
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('delete-checkitem-container');
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('bx', 'bx-trash', 'checkitem-trash');
    rightContainer.appendChild(trashIcon);
    // link together
    checkItemContainer.appendChild(leftContainer);
    checkItemContainer.appendChild(textContainer);
    checkItemContainer.appendChild(rightContainer);
    checklistContainer.appendChild(checkItemContainer);

    return {
      trashIcon,
      checkBox,
      checkItemContainer
    }
  }

  // Return functions so they can be used in logic controller

  return {
    projectModal,
    allProjects,
    projectCard,
    newProjectCard,
    singleProject,
    newTodoModal,
    clearAndReturnTodoContainer,
    singleTodo,
    singleTodoExpandedView,
    singleChecklistItem,
    todayTodos,
    weekTodos
  }
})();

export default displayController;