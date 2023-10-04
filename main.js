
    // Store tasks in an array
    let tasks = [];

    // Function to add a new task
    function addTask() {
      const taskText = document.getElementById("new-task").value;
      if (taskText.trim() !== "") {
        tasks.push({ text: taskText, completed: false });
        document.getElementById("new-task").value = "";
        displayTasks();
      }
    }

    // Function to display tasks
    function displayTasks() {
      const tasksContainer = document.getElementById("tasks");
      tasksContainer.innerHTML = "";
      tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        const taskInput = document.createElement("input");
        taskInput.type = "checkbox";
        taskInput.checked = task.completed;
        taskInput.addEventListener("change", () => toggleCompleted(index));
        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        if (task.completed) {
          taskText.classList.add("completed");
        }
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(index));
        taskDiv.appendChild(taskInput);
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteButton);
        tasksContainer.appendChild(taskDiv);
      });
    }

    // Function to toggle task completion
    function toggleCompleted(index) {
      tasks[index].completed = !tasks[index].completed;
      displayTasks();
    }

    // Function to delete a task
    function deleteTask(index) {
      tasks.splice(index, 1);
      displayTasks();
    }

    // Initial display of tasks
    displayTasks();
  
