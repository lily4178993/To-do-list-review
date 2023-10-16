/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app/utils/storage.js
/**
 * This module is used to retrieve todos from local storage or store them there.
*/
const storageKey = 'todos';

const GET_TODOS_FROM_STORAGE = () => {
  const todos = JSON.parse(localStorage.getItem(storageKey));
  return todos || [];
};

const SAVE_TODOS_TO_STORAGE = (todos) => {
  localStorage.setItem(storageKey, JSON.stringify(todos));
};



;// CONCATENATED MODULE: ./src/app/utils/add-item.js
/**
 * This module is used to retrieve the To-do task from input element
 * and store it to the local
*/


const ADD_NEW_ITEM = () => {
  // Retrieving the To-do task input element
  const INPUT_ADD_NEW_ITEM = document.getElementById('add-item');
  const INPUT_VALUE = INPUT_ADD_NEW_ITEM.value.trim();

  if (INPUT_VALUE) {
    const UPDATED_LIST = GET_TODOS_FROM_STORAGE();
    const NEW_TODO = {
      description: INPUT_VALUE,
      completed: false,
      index: UPDATED_LIST.length + 1,
    };
    UPDATED_LIST.push(NEW_TODO);
    SAVE_TODOS_TO_STORAGE(UPDATED_LIST);
  }
  INPUT_ADD_NEW_ITEM.value = '';
};



;// CONCATENATED MODULE: ./src/app/utils/data.js
/**
 * This module is used to collect all the todos tasks from local storage
 * and store them to constant named TODO_LIST_COLLECTION
*/


const TODO_LIST_COLLECTION = GET_TODOS_FROM_STORAGE();

/* harmony default export */ const data = (TODO_LIST_COLLECTION);

;// CONCATENATED MODULE: ./src/app/utils/remove.js
/**
 * This module is used to retrieve the To-do task from the local storage
 * and remove an element from it
 */



// Function to remove one To-do task
const REMOVE_ONE_ITEM = (todoID) => {
  const INDEX = data.filter((todoItem) => todoItem.index === todoID);
  if (INDEX !== -1) {
    data.splice(INDEX, 1);
  }
  // Refresh the To-do index order
  let counter = 0;
  data.forEach((todoItem) => {
    todoItem.index = counter + 1;
    counter += 1;
  });
};

// Function to remove all completed To-do tasks
const REMOVE_ALL_COMPLETED_ITEMS = () => {
  const UPDATED_LIST = GET_TODOS_FROM_STORAGE();
  const FILTERED_TASKS = UPDATED_LIST.filter((todoItem) => todoItem.completed === false);

  // Refresh the To-do index order
  for (let i = 0; i < FILTERED_TASKS.length; i += 1) {
    FILTERED_TASKS[i].index = i + 1;
  }
  SAVE_TODOS_TO_STORAGE(FILTERED_TASKS);
};



;// CONCATENATED MODULE: ./src/app/utils/edit.js
/**
 * This module is used to retrieve the To-do task from the local storage
 * and remove an element from it
 */

/* import toDoListCollection from './data.js'; */

// Function to remove one To-do task
const EDIT_TODO_ITEM = (todoID, newDescription) => {
  const UPDATED_LIST = GET_TODOS_FROM_STORAGE();
  console.log(UPDATED_LIST[todoID].description = 'Juste un test');
  UPDATED_LIST[todoID].description = newDescription;
  SAVE_TODOS_TO_STORAGE(UPDATED_LIST);
};



;// CONCATENATED MODULE: ./src/app/utils/status.js
/**
 * This module is used to add some functionality to the application
   to make it interactive.
 * The user will also be able to mark task completion
   by selecting the corresponding checkbox (or undo it by unchecking the checkbox).

 * The updated tasks list will be stored in local storage.
*/




// Function related to the checkbox status (checked: true)
const STATUS_CHECKED = (todoID, todoStatus) => {
  const UPDATED_LIST = GET_TODOS_FROM_STORAGE();
  if (todoStatus === false) {
    UPDATED_LIST[todoID - 1].completed = true;
    SAVE_TODOS_TO_STORAGE(UPDATED_LIST);
  }
};

// Function related to the checkbox status (checked: false)
const STATUS_UNCHECKED = (todoID, todoStatus) => {
  const UPDATED_LIST = GET_TODOS_FROM_STORAGE();
  if (todoStatus === true) {
    UPDATED_LIST[todoID - 1].completed = false;
    SAVE_TODOS_TO_STORAGE(UPDATED_LIST);
  }
};

/**
 * Function related to the checkbox status (checked: true / false)
    and the status of the To-Do task in the local storage (completed: true / false).

 * If page reload, the appropriate CSS style will be applied after
    checking the To-Do task status.
*/
const STATUS_AFTER_RELOAD = () => {
  const TODO_LABEL_ELEMENTS = document.querySelectorAll('.label');
  const TODO_CHECKBOX_ELEMENTS = document.querySelectorAll('.checkbox');

  for (let index = 0; index < data.length; index += 1) {
    for (let j = 0; j < TODO_CHECKBOX_ELEMENTS.length; j += 1) {
      const element = TODO_CHECKBOX_ELEMENTS[j];
      const todoItem = data[j];
      if (todoItem.completed === true) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    }

    for (let j = 0; j < TODO_LABEL_ELEMENTS.length; j += 1) {
      const element = TODO_LABEL_ELEMENTS[j];
      const todoItem = data[j];
      if (todoItem.completed === true) {
        element.classList.add('checked');
      } else {
        element.classList.remove('checked');
      }
    }
  }
};



;// CONCATENATED MODULE: ./assets/more-1.png
const more_1_namespaceObject = __webpack_require__.p + "3a00f92e33278af26c00.png";
;// CONCATENATED MODULE: ./assets/remove.png
const assets_remove_namespaceObject = __webpack_require__.p + "7611cb495c73921c2867.png";
;// CONCATENATED MODULE: ./src/app/utils/display.js
/**
 * This module is used to create a new To-do task element in the main HTML file
*/








const LIST_CONTAINER = document.querySelector('.list');
const DISPLAY_TODO_LIST = () => {
  LIST_CONTAINER.innerHTML = '';
  data.forEach((todoItem) => {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.classList.add('list-item');
    const INPUT_CHECKBOX = document.createElement('input');
    INPUT_CHECKBOX.type = 'checkbox';
    INPUT_CHECKBOX.name = 'check';
    INPUT_CHECKBOX.placeholder = 'check';
    INPUT_CHECKBOX.id = todoItem.index;
    INPUT_CHECKBOX.classList.add('checkbox');
    const VIEW_ITEM = document.createElement('div');
    VIEW_ITEM.classList.add('view_item');
    const VIEW_LABEL = document.createElement('p');
    VIEW_LABEL.classList.add('label');
    VIEW_LABEL.textContent = todoItem.description;
    const BUTTON_MORE = document.createElement('button');
    BUTTON_MORE.type = 'button';
    BUTTON_MORE.classList.add('btn', 'btn-more');
    const BUTTON_REMOVE = document.createElement('button');
    BUTTON_REMOVE.type = 'submit';
    BUTTON_REMOVE.id = todoItem.index;
    BUTTON_REMOVE.classList.add('btn', 'btn-remove');
    const MORE_ICON = document.createElement('img');
    MORE_ICON.src = more_1_namespaceObject;
    MORE_ICON.alt = 'More Icon';
    MORE_ICON.classList.add('icon');
    const REMOVE_ICON = document.createElement('img');
    REMOVE_ICON.src = assets_remove_namespaceObject;
    REMOVE_ICON.alt = 'Remove Icon';
    REMOVE_ICON.classList.add('icon');

    // Add double-click event to VIEW_LABEL
    VIEW_LABEL.addEventListener('dblclick', (event) => {
      event.stopPropagation();
      VIEW_LABEL.contentEditable = 'true';
      VIEW_LABEL.addEventListener('keydown', () => {
        const data = VIEW_LABEL.textContent;
        EDIT_TODO_ITEM(todoItem.index, data);
      });
    });

    // Add click event to BUTTON_REMOVE
    BUTTON_REMOVE.addEventListener('click', (event) => {
      event.stopPropagation();
      REMOVE_ONE_ITEM(todoItem.index);
      SAVE_TODOS_TO_STORAGE(data);
      DISPLAY_TODO_LIST();
    });

    // Add change event to INPUT_CHECKBOX
    INPUT_CHECKBOX.addEventListener('change', () => {
      if (INPUT_CHECKBOX.checked === true) {
        VIEW_LABEL.classList.add('checked');
        STATUS_CHECKED(todoItem.index, todoItem.completed);
        VIEW_LABEL.addEventListener('dblclick', (event) => {
          event.stopPropagation();
          VIEW_LABEL.contentEditable = 'false';
        });
      } else {
        VIEW_LABEL.classList.remove('checked');
        STATUS_UNCHECKED(todoItem.index, todoItem.completed);
      }
    });
    BUTTON_MORE.appendChild(MORE_ICON);
    BUTTON_REMOVE.appendChild(REMOVE_ICON);
    VIEW_ITEM.appendChild(VIEW_LABEL);
    LIST_ITEM.appendChild(INPUT_CHECKBOX);
    LIST_ITEM.appendChild(VIEW_ITEM);
    LIST_ITEM.appendChild(BUTTON_REMOVE);
    LIST_ITEM.appendChild(BUTTON_MORE);
    LIST_CONTAINER.appendChild(LIST_ITEM);
  });
};
// Call the DISPLAY_TODO_LIST function to display the initial list
DISPLAY_TODO_LIST();
STATUS_AFTER_RELOAD();

;// CONCATENATED MODULE: ./src/index.js





const FORM_ADD_NEW_ITEM = document.querySelector('.add-item');
FORM_ADD_NEW_ITEM.addEventListener('submit', (event) => {
  event.preventDefault();
  ADD_NEW_ITEM();
  DISPLAY_TODO_LIST();
  document.location.reload();
});

const REMOVE_ALL_BUTTON = document.querySelector('.btn-remove-all');
REMOVE_ALL_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  REMOVE_ALL_COMPLETED_ITEMS();
  document.location.reload();
});
/******/ })()
;