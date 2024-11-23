const inputs = document.getElementById("inputs");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
function addTask() {
  const vluesinput = inputs.value;
  console.log(vluesinput);
  if (vluesinput === "") {
    alert("Please enter a task nameet.");
    return;
  }
  const taskItem = document.createElement("li");
  taskItem.textContent = vluesinput;
  taskList.appendChild(taskItem);

  const dels = document.createElement("button");
  dels.textContent = "delete";
  dels.addEventListener("click", () => taskItem.remove());
  taskItem.appendChild(dels);

  const cheakbox = document.createElement("input");
  cheakbox.type = "checkbox";
  cheakbox.addEventListener("change", () => {
    taskItem.classList.toggle("complete");
  });
  taskItem.prepend(cheakbox);
  inputs.value = "";
}
