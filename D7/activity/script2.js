const form = document.getElementById("taskManagerForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const taskInput = document.getElementById("task");
    const task = taskInput.value

    const list = document.createElement("li");
    const listItem = document.createElement("p");
    const button = document.createElement("button");

    const container = document.getElementById("taskListContainer")
    container.appendChild(list)

    listItem.textContent = task
    list.appendChild(listItem)

    button.textContent = "delete"
    button.addEventListener("click", () => handleDelete(list));
    list.appendChild(button)

    taskInput.value = "";
}

function handleDelete(item) {
    item.remove();
    console.log("Task deleted", item);
}