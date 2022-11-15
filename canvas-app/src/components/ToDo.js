import { VStack } from "@chakra-ui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";

function ToDo() {
    const [todos, setTodos] = useState(
        () => JSON.parse(localStorage.getItem("todos")) || []
    );

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(todos);
    }, [todos]);

    function deleteTodo(id) {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    }

    function changePriority(id) {
        let newTodos = todos;
        for (let i = 0; i < newTodos.length; i++) {
            let task = newTodos[i];
            if (task.id == id) {
                if (task.priority == "!!!") {
                    task.priority = "!";
                } else {
                    task.priority += "!";
                }
            }
        }
        setTodos(newTodos);
    }

    function addTodo(todo) {
        setTodos([...todos, todo]);
    }

    return (
        <VStack p="4">
            <AddTodo addTodo={addTodo} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                changePriority={changePriority}
            />
        </VStack>
    );
}
export default ToDo;
