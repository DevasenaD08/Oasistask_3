
        let todoCount = 0;

        function addTodo() {
            const todoInput = document.getElementById('todo-input');
            const todoList = document.getElementById('todo-list');

            if (todoInput.value.trim() !== '') {
                const todoItem = document.createElement('li');
                todoItem.className = `todo-item background${(todoCount % 3) + 1}`;
                todoItem.innerHTML = `
                    <input type="checkbox" class="checkbox" id="todo${todoCount}" onchange="toggleCompleted(${todoCount})">
                    <label for="todo${todoCount}" class="task-text">
                        <span>${todoInput.value}</span>
                    </label>
                    <button onclick="removeTodo(${todoCount})">Remove</button>
                `;
                todoList.appendChild(todoItem);
                todoInput.value = '';
                todoCount++;
            }
        }

        function removeTodo(index) {
            const todoList = document.getElementById('todo-list');
            const todoItems = document.getElementsByClassName('todo-item');
            todoList.removeChild(todoItems[index]);
        }

        function toggleCompleted(index) {
            const todoItems = document.getElementsByClassName('checkbox');
            const todoLabels = document.getElementsByClassName('task-text');
            if (todoItems[index].checked) {
                todoLabels[index].classList.add('completed');
            } else {
                todoLabels[index].classList.remove('completed');
            }
        }

        function checkEnter(event) {
            if (event.key === 'Enter') {
                addTodo();
            }
        }
    