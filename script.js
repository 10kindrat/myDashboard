function clickTodo() {
    let value = prompt("할 일을 입력하세요:");
    if (value) {
        let todoList = document.getElementById("todoList");
        let newTodo = document.createElement("li");
        newTodo.textContent = value;
        todoList.appendChild(newTodo);
        let emptyTodo = document.getElementById("empty_todo");
        if (emptyTodo) {
            emptyTodo.remove();
        }
        
        newTodo.addEventListener("click", function() {
            if (confirm("이 할 일을 삭제하시겠습니까?")) {
                newTodo.remove();
                if (todoList.children.length === 0) {
                    let emptyTodo = document.createElement("li");
                    emptyTodo.id = "empty_todo";
                    emptyTodo.textContent = "할 일을 추가하세요";
                    todoList.appendChild(emptyTodo);
                }
            }
        });
    }

}