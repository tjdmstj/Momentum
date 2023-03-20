const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id=newTodo.id;
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click",deleteTodo);
    todoList.appendChild(li);
}

function handelToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj={
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    todoInput.value ="";
    saveToDos();
}

todoForm.addEventListener("submit",handelToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintTodo);
    toDos=parsedToDos;
}