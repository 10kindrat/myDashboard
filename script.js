let todoListContent = JSON.parse(localStorage.getItem("storageTodo")) || [];

renderTodoList(0);

function renderTodoList() {
    let todoList = document.getElementById("todoList");

    todoList.innerHTML = ""; // 기존의 할 일 목록을 초기화합니다.

    for (let i = 0; i < todoListContent.length; i++) {
        let newTodo = document.createElement("li");
        newTodo.textContent = todoListContent[i];

        newTodo.setAttribute("data-index", i); // 할 일의 인덱스를 데이터 속성으로 저장합니다.
        
        todoList.appendChild(newTodo);
        
        newTodo.addEventListener("click", function() { // 할 일을 클릭하면 삭제 여부를 묻는 창이 나타납니다.
            let index = Number(this.getAttribute("data-index")); // 클릭한 할 일의 인덱스를 가져옵니다.
            if (confirm("이 할 일을 삭제하시겠습니까?")) {
                todoListContent.splice(index, 1); // 해당 할 일을 배열에서 제거합니다.
                localStorage.setItem("storageTodo", JSON.stringify(todoListContent)); // 변경된 배열을 localStorage에 저장합니다.
                renderTodoList(); // 할 일 목록을 다시 렌더링합니다.
            }
        });
    }
    if (todoListContent.length === 0) {
        let emptyTodo = document.createElement("li");
        emptyTodo.textContent = "할 일을 추가하세요";
        todoList.appendChild(emptyTodo);
    }
}

function clickTodo() {
    let value = prompt("할 일을 입력하세요:");
    if (value) {
        todoListContent.push(value);
        localStorage.setItem("storageTodo", JSON.stringify(todoListContent));
        renderTodoList();
    }

}

