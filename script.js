function clicked() {
    let value = prompt("할일을 입력하세요:");
    if (value === null || value.trim() === "") {
        return; // 입력이 취소되거나 빈 문자열인 경우, 함수를 종료합니다.
    }

    // 기존의 "할 일을 추가하세요" 메시지 제거
    let emptyTodo = document.getElementById("empty_todo");
    if (emptyTodo) {
        emptyTodo.remove();
    }

    let todoList = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.textContent = value;
    todoList.appendChild(li);
}   