function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskList = document.getElementById("task-List");

    if (taskInput.value === "") {
        alert("Please enter the task");
        return;
    }

    var listItem = document.createElement('li');
    listItem.innerText = taskInput.value;

    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'task-button';

    // Delete button
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    // Complete button
    var completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.onclick = function() {
        listItem.classList.toggle('complete');
    };

    // Edit button
    var editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = function() {
        var newTaskText = prompt("Edit your task:", listItem.innerText);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            listItem.innerText = newTaskText;
            // Re-add the buttons after updating the text
            listItem.appendChild(buttonContainer);
        }
    };

    // Append buttons to button container
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(editButton);
    
    // Append button container to list item
    listItem.appendChild(buttonContainer);
    taskList.appendChild(listItem);

    taskInput.value = "";
}
