function addTodo () {
    const input = document.getElementById('todoInput')
    const inputValue = input.value.trim();
    if (inputValue !== "") {
        // Create a new list item
        // Get the unorder list:
        const todoList = document.getElementById('todoList');
        // Create a list item using createElement:
        const li = document.createElement('li');
        const checkBox = document.createElement('input');
        // Set checkbox input to a checkbox:
        checkBox.type = 'checkbox';
        // Create a textNode that uses the inputvalue
        const textNode = document.createTextNode(inputValue);

        // Append the textNode to the li:
        li.appendChild(checkBox);
        li.appendChild(textNode);
        // Append the li to the ul:
        todoList.appendChild(li);
    }
    else {
        alert('Please enter a valid task');
    }
}


