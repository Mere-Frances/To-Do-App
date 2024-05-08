var plottedNotes = [];
function addTodo() {
    const input = document.getElementById('todoInput');
    const inputValue = input.value.trim();
    if (inputValue !== "") {
        // Create a new list item
        // Get the unordered list:
        const todoList = document.getElementById('todoList');
        // Create a list item using createElement:
        const li = document.createElement('li');
        const para = document.createElement('p');
        const checkBox = document.createElement('input');
        // Set checkbox input to a checkbox:
        checkBox.type = 'checkbox';
        // Create a textNode that uses the inputValue
        const textNode = document.createTextNode(inputValue);

        // Append the textNode to the li:
        li.appendChild(checkBox);
        li.appendChild(textNode);
        li.appendChild(para).style.width = '100px';
        // Append the li to the ul:
        todoList.appendChild(li);

        // Randomize position
        const container = document.querySelector('.postit-container');
        const containerRect = container.getBoundingClientRect();
        var randomX = 0;
        var randomY = 0;
        var attempts = 0;
        while (true) {
            randomX = Math.floor(Math.random() * (containerRect.width - 100)); // Adjusted to keep inside container
            randomY = Math.floor(Math.random() * (containerRect.height - 100)); // Adjusted to keep inside container
            var isOverlapping = false;
            for (let i = 0; i < plottedNotes.length; i++) {
                console.log(plottedNotes)
                var note = plottedNotes[i];
                var x = note[0];
                var y = note[1];
                console.log("note " + x + " " + y)
                if (randomX > x - 100 && randomX < x + 100 && randomY > y - 100 && randomY < y + 100) {
                    console.log("x " + x + " y " + y + " randomX " + randomX + " randomY " + randomY)
                    isOverlapping = true;
                    break;
                }
            }
            if (plottedNotes.length === 0) {
                isOverlapping = false;
            }
            if (!isOverlapping || attempts > 1000) {
                var arrayNote = [randomX, randomY];
                plottedNotes.push(arrayNote);
                break;
            }
            attempts++;
        }

        // Set random position
        li.style.left = randomX + 'px';
        li.style.top = randomY + 'px';

        // Array of background colors
        const colors = ['#FFF18B', '#FFD6E5', '#B8ECFF', '#AEFFD3'];
        // Select a random color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // Set the background color of the li element
        li.style.backgroundColor = randomColor;
    } else {
        alert('Please enter a valid task');
    }
}

// add event listener to the button
document.getElementById('addBtn').addEventListener('click', addTodo);

document.getElementById('todoList').addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
        const listItem = event.target.parentNode;
        if (event.target.checked) {
            listItem.style.textDecoration = 'line-through';
        } else {
            listItem.style.textDecoration = 'none';
        }
    }
});
