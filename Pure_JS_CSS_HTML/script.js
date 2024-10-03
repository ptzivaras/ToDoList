// Get elements from the DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
    // Get the task input value
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item (li)
        const li = document.createElement('li');

        // Create a text node for the task
        const taskNode = document.createTextNode(taskText);

        // Create a delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // Append the task text and delete button to the list item
        li.appendChild(taskNode);
        li.appendChild(deleteBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to the delete button
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    } else {
        alert('Please enter a task!');
    }
}

// Event listener for adding a task when the button is clicked
addTaskBtn.addEventListener('click', addTask);

// Optional: Add a task when the 'Enter' key is pressed
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
