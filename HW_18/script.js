const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-todo');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const input = this.task; 
    const taskText = input.value.replace(/^\s+|\s+$/g, ''); 

    if (taskText !== '') {
        const listItem = document.createElement('li'); 
        listItem.textContent = taskText; 
        listItem.addEventListener('click', function() { 
            if (this.classList.contains('completed')) {
                this.classList.remove('completed');
            } else {
                this.classList.add('completed'); 
            }
        });
        todoList.appendChild(listItem); 
        input.value = ''; 
    }
});


clearBtn.addEventListener('click', function() {
    const completedItems = document.querySelectorAll('.completed'); 
    completedItems.forEach(item => item.remove()); 
});