let addTask = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let taskInput = document.querySelector(".input");
const tasks = [];
let i = 0;
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    tasks.splice(e.target.parentElement.id, 1);
    this.window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  if (e.target === addTask && taskInput.value !== "") {
    id = i++;
    let taski = { title: taskInput.value, id: id };
    taskInput.value = "";
    tasks.push(taski);
    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    let usedTask = tasks[tasks.length - 1];
    let taskDiv = document.createElement("div").cloneNode(true);
    let taskP = document.createElement("p").cloneNode(true);
    let taskButton = document.createElement("button").cloneNode(true);
    taskDiv.classList.add("task");
    taskDiv.id = usedTask.id;
    console.log(taskDiv.id);
    taskP.classList.add("title");
    taskButton.classList.add("delete");
    let taskPText = document.createTextNode(usedTask.title);
    let taskButtonText = document.createTextNode("Delete");
    taskP.appendChild(taskPText);
    taskButton.appendChild(taskButtonText);

    taskDiv.appendChild(taskP);
    taskDiv.appendChild(taskButton);
    tasksDiv.appendChild(taskDiv);
  }
});
