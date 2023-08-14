import Project from './project.js';
import Todo from './todo.js';
import displayController from './displayController.js';
import Checkitem from './checkitem.js';

const logicController = (() => {
  const newProjectNav = document.getElementById('nav-new-project');
  const allProjectsNav = document.getElementById('nav-projects');
  const dueTodayNav = document.getElementById('nav-today');
  const dueThisWeekNav = document.getElementById('nav-week')
  const allProjects = [];

  // gets all due todos due today.
  const getTodayTodos = () => {
    let dueTodos = [];
    let todayDate = new Date();
    let formattedDateString = formatDate(todayDate);
    allProjects.forEach((project) => {
      project.todos.forEach((todo) => {
        if (todo.dueDate === formattedDateString) {
          dueTodos.push({ project, todo });
        }
      })
    })
    let todayTodosContainer = displayController.todayTodos();
    dueTodos.forEach((projectObj) => {
      let todo = projectObj.todo;
      let project = projectObj.project;
      let { textContainer, checkBox, trashIcon, todoContainer } = displayController.singleTodo(todo.title, todo.description, todo.completed, todo.dueDate, todayTodosContainer);
      trashIcon.addEventListener('click', () => {
        project.deleteTodo(todo.id);
        todoContainer.parentElement.removeChild(todoContainer);
      })
      checkBox.addEventListener('change', () => {
        todo.toggleComplete();
      })
      textContainer.addEventListener('click', (event) => {
        openTodoModalEvent(project, todo, event);
      })
    })
  }

  const getWeekTodos = () => {
    let dueTodos = [];
    let weekDates = getNextWeekDates();

    allProjects.forEach((project) => {

      project.todos.forEach((todo) => {

        weekDates.forEach((date) => {

          if (todo.dueDate === date) {
            dueTodos.push({project, todo});
          }
        })
      })
    });

    let weekTodosContainer = displayController.weekTodos();
    dueTodos.forEach((projectObj) => {
      let todo = projectObj.todo;
      let project = projectObj.project;
      let { textContainer, checkBox, trashIcon,todoContainer } = displayController.singleTodo(todo.title, todo.description, todo.completed, todo.dueDate, weekTodosContainer);
      trashIcon.addEventListener('click', () => {
        project.deleteTodo(todo.id);
        todoContainer.parentElement.removeChild(todoContainer);
      })
      checkBox.addEventListener('change', () => {
        todo.toggleComplete();
      })
      textContainer.addEventListener('click', (event) => {
        openTodoModalEvent(project, todo, event);
      })
    });

  }

  const getNextWeekDates = () => {
    let dates = [];
    let todayDate = new Date();

    for (let i = 0; i < 7; i ++) {
      let formattedDate = formatDate(todayDate);
      dates.push(formattedDate);
      todayDate.setDate(todayDate.getDate() + 1);

    }
    return dates;
  }

  // Format date to match date generated by calender form input
  const formatDate = (todayDate) => {
    let day = todayDate.getDate() ;
    if (day < 10) {
      day = `0${day}`
    }
    let month = todayDate.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let year = todayDate.getFullYear();
    let formattedDateString = `${year}-${month}-${day}`;
    return formattedDateString;
  }

  // When button clicked to open new project form
  const newProjectModal = () => {

    let { exitBtn, projectForm, projectModalEl } = displayController.projectModal();
    exitBtn.addEventListener('click', () => {
      projectModalEl.parentElement.removeChild(projectModalEl);
    });
    projectForm.addEventListener('submit', (event) => {
      newProjectSubmit(event, projectModalEl);
    });
  }

  // Submit event for new project form 
  const newProjectSubmit = (event, modalElement) => {

    event.preventDefault(); 
    const title = document.getElementById('title').value;
    const project = new Project(title);
    allProjects.push(project);
    modalElement.parentElement.removeChild(modalElement);
    getIndividualProject(project);
  }

  // button clicked to open new todo modal
  const newTodoModal = (project) => {
    
    let {exitBtn, newTodoForm, projectModalEl } = displayController.newTodoModal();
    exitBtn.addEventListener('click', () => {
      projectModalEl.parentElement.removeChild(projectModalEl);
    });
    newTodoForm.addEventListener('submit', (event) => {
      newTodoSubmit(event, project, projectModalEl);
    });
        
  }

  // submit event for new Todo Form
  const newTodoSubmit = (event, project, modalElement) => {

    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const todo = new Todo(title, description, dueDate, priority);
    modalElement.parentElement.removeChild(modalElement);
    console.log(todo.dueDate);
    project.addTodo(todo);
    getProjectTodos(project);
  }

  // Home page render/all project grid view
  const getAllProjects = () => {

    const projectsContainer = displayController.allProjects();
    const newProjectCard = displayController.newProjectCard();
    projectsContainer.appendChild(newProjectCard);
    newProjectCard.addEventListener('click', newProjectModal);
    allProjects.forEach((project) => {
      let projectCard = displayController.projectCard(project.title);
      projectCard.addEventListener('click', () => {
        getIndividualProject(project);
      })
      projectsContainer.appendChild(projectCard);
    })
  };

  // set up individual project page 
  const getIndividualProject = (project) => {

    let {projectContainer, newTodoButton} = displayController.singleProject(project);
    newTodoButton.addEventListener('click', () => {
      console.log('reading new todo btn event listener')
      newTodoModal(project)
    });
    getProjectTodos(project);
  }

  // set up all the todos in a single project
  const getProjectTodos = (project) => {
    console.log('get project todos function')
    let todosContainer = displayController.clearAndReturnTodoContainer();
    project.todos.forEach((todo) => {
      let {textContainer, checkBox, trashIcon, todoContainer} = displayController.singleTodo(todo.title, todo.description, todo.completed, todo.dueDate, todosContainer);
      trashIcon.addEventListener('click', () => {
        project.deleteTodo(todo.id);
        todoContainer.parentElement.removeChild(todoContainer);
      })
      checkBox.addEventListener('change', () => {
        todo.toggleComplete();
      })
      textContainer.addEventListener('click', (event) => {
        openTodoModalEvent(project, todo, event);
      })
    })
  }

  // Action when todo item is deleted
  // const deleteTodoEvent = (project, todo) => {
  //   project.deleteTodo(todo.id);
  //   getProjectTodos(project);
  // }

  // when todo item is clicked. Opens editable Modal.
  const openTodoModalEvent = (project, todo) => {

    let { todoModal, exitBtn, dateInput, selectInput, titleInput, descriptionInput, addChecklistInput, checklistContainer } = displayController.singleTodoExpandedView(todo);
    if (todo.checklist.length > 0) {
      buildTodoChecklist(todo, checklistContainer);
    }
    exitBtn.addEventListener('click', () => {
      todoModal.parentElement.removeChild(todoModal);
    })
    titleInput.addEventListener('change', (event) => {
      const newTitle = event.target.value;
      todo.editTitle(newTitle);
      getProjectTodos(project);
    })
    descriptionInput.addEventListener('change', (event) => {
      const newDescription = event.target.value;
      todo.editDescription(newDescription);
      getProjectTodos(project);
    })
    addChecklistInput.addEventListener('change', (event) => {
      let newItem = event.target.value;
      const newCheckItem = new Checkitem(newItem);
      todo.addCheckItem(newCheckItem);
      event.target.value = '';
      addSingleChecklistItem(todo, newCheckItem, checklistContainer);
    })
    selectInput.addEventListener('change', (event) => {
      const newPriority = event.target.value;
      todo.editPriority(newPriority);
      getProjectTodos(project);
    })
    dateInput.addEventListener('change', (event) => {
      const newDate = event.target.value;
      todo.editDueDate(newDate);
      getProjectTodos(project);
    })
   
  }

  // build the checklist in expanded todo modal view
  const buildTodoChecklist = (todo, checklistContainer) => {

    todo.checklist.forEach((checkItem) => {
      addSingleChecklistItem(todo, checkItem, checklistContainer);
    })
  }

  // individaul cheklist item 
  const addSingleChecklistItem = (todo, checkItem, checklistContainer) => {

    let {trashIcon, checkBox, checkItemContainer } = displayController.singleChecklistItem(checkItem, checklistContainer);
    trashIcon.addEventListener('click', () => {
      todo.deleteCheckItem(checkItem.id);
      checkItemContainer.parentElement.removeChild(checkItemContainer);
    })
    checkBox.addEventListener('change', () => {
      checkItem.toggleComplete();
    })
  }



  // Nav link event listeners
  dueTodayNav.addEventListener('click', () => {
    getTodayTodos();
  })

  dueThisWeekNav.addEventListener('click', () => {
    getWeekTodos();
  });

  newProjectNav.addEventListener('click', () => {
    console.log('new project nav click')
    newProjectModal();
  });

  allProjectsNav.addEventListener('click', () => {
    getAllProjects();
  });

  return {
    getAllProjects
  }
})();

export default logicController;