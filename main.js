let updateElement = null;

function submitForm(event) {
    event.preventDefault();

    const tasksForm = document.forms["lecture-add"];

    const name = tasksForm["name"].value;
    const description = tasksForm["description"].value;
    const priority = tasksForm["priority"].value;

    const li = document.createElement("li");

    //upper div
    const div = document.createElement("div");
    const h6 = document.createElement("h6");
    h6.setAttribute("class", "title");
    h6.innerText = name;
    const span = document.createElement("span");
    span.setAttribute("class", "ml-2 badge badge-danger");
    span.innerText = priority;

    h6.appendChild(span);

    const p = document.createElement("p");
    p.setAttribute("class", "description");
    p.innerHTML = description;

    div.appendChild(h6);
    div.appendChild(p);

    //lower div
    const buttonDiv = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-danger");
    const i = document.createElement("i");
    i.setAttribute("class", "far fa-trash-alt");
    deleteButton.appendChild(i);

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "btn btn-warning");
    const editI = document.createElement("i");
    editI.setAttribute("class", "fas fa-pencil");
    editButton.appendChild(editI);

    const completeButton = document.createElement("button");
    completeButton.setAttribute("class", "btn btn-success");
    const completeI = document.createElement("i");
    completeI.setAttribute("class", "fas fa-check");
    completeButton.appendChild(completeI);

    buttonDiv.appendChild(completeButton);
    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);

    li.appendChild(div);
    li.appendChild(buttonDiv);

    const ul = document.getElementById("tasks-list");

    ul.appendChild(li);

    tasksForm["name"].value = "";
    tasksForm["description"].value = "";
    tasksForm["priority"].value = "";

    console.log(updateElement);

    if (updateElement) {
        updateElement.remove();
        updateElement = null;
    }

    // console.log(li);
}
const todoList = document.getElementById("tasks-list");

todoList.addEventListener("click", function(event) {
    const clickedElement = event.target;
    const classList = clickedElement.classList;

    if (classList.contains("btn-success")) {
        clickedElement.parentElement.parentElement.firstChild.firstChild.setAttribute(
            "class",
            "title completed"
        );
    } else if (classList.contains("btn-warning")) {
        console.log(clickedElement);
        const upperDiv = clickedElement.parentElement.parentElement.firstChild;

        const title = upperDiv.firstChild.innerText;

        const description = upperDiv.lastChild.innerText;

        const tasksForm = document.forms["lecture-add"];

        const priority = upperDiv.firstChild.lastChild.innerText;

        tasksForm["name"].value = title;
        tasksForm["description"].value = description;
        tasksForm["priority"].value = priority;

        const liElement = clickedElement.parentElement.parentElement;

        updateElement = liElement;
    }
});

function deleteItem() {}