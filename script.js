let todoList = JSON.parse(localStorage.getItem("todoList") || "[]");

for (let i = 0; i < todoList.length; i++) {
    let todos = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.textContent = todoList[i];
    todos.appendChild(li);
    let emptyTodo = document.getElementById("empty_todo");
    if (emptyTodo) {
        emptyTodo.remove();
    }
}

function clicked() {
    let value = prompt("할일을 입력하세요:");
    if(!value) return;

    // 기존의 "할 일을 추가하세요" 메시지 제거
    let emptyTodo = document.getElementById("empty_todo");
    if (emptyTodo) {
        emptyTodo.remove();
    }

    todoList.push(value);

    localStorage.setItem("todoList", JSON.stringify(todoList));

    let todos = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.textContent = value;
    todos.appendChild(li);
} 