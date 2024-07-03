document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <span>${todoText}</span>
            <div>
                <button class="up-btn"><i class="fas fa-arrow-up"></i></button>
                <button class="down-btn"><i class="fas fa-arrow-down"></i></button>
                <button class="remove-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;

        listItem.querySelector('.remove-btn').addEventListener('click', function() {
            this.parentElement.parentElement.classList.add('fade-out');
            setTimeout(() => {
                this.parentElement.parentElement.remove();
            }, 300);
        });

        listItem.querySelector('.up-btn').addEventListener('click', function() {
            const item = this.parentElement.parentElement;
            if (item.previousElementSibling) {
                item.parentElement.insertBefore(item, item.previousElementSibling);
            }
        });

        listItem.querySelector('.down-btn').addEventListener('click', function() {
            const item = this.parentElement.parentElement;
            if (item.nextElementSibling) {
                item.parentElement.insertBefore(item.nextElementSibling, item);
            }
        });

        todoList.appendChild(listItem);
        todoInput.value = "";
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}