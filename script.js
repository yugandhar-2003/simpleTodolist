document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("button");
    const taskInput = document.querySelector("#todotask input");
    const taskList = document.getElementById("tasks");

    addButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("div");
            taskItem.classList.add("task-item");
            taskItem.innerHTML = `
      <div class="todocont">
        <span>${taskText}</span>
        <button class="why btn btn-sm delete-task" style="background-color:grey; color:white;">Delete</button>
      </div>`;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            const deleteButton = taskItem.querySelector(".delete-task");
            deleteButton.addEventListener("click", function() {
                taskItem.remove();
            });
        }
    });
});
