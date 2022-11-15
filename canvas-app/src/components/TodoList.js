import React from "react";
import {
    VStack,
    StackDivider,
    HStack,
    Text,
    Spacer,
    IconButton,
    Badge,
} from "@chakra-ui/react";
import PriorityButton from "./PriorityButton";
import CourseLabel from "./CourseLabel";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo, changePriority }) => {
    if (!todos.length) {
        return (
            <Badge colorScheme="cyan" p="4" borderRadius="lg">
                Enter New Task
            </Badge>
        );
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderWidth="2px"
            borderColor="gray.100"
            borderRadius="lg"
            padding="4"
            w="100%"
            maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
        >
            {todos.map((todo) => (
                <HStack key={todo.id}>
                    <CourseLabel
                        id={todo.id}
                        course={todo.course}
                        changeCourse={() => console.log("hi")}
                    />
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <PriorityButton
                        id={todo.id}
                        priority={todo.priority}
                        changePriority={changePriority}
                    />
                    <IconButton
                        icon={<FaTrash />}
                        isRound="true"
                        onClick={() => deleteTodo(todo.id)}
                        p={5}
                    />
                </HStack>
            ))}
        </VStack>
    );
};

export default TodoList;
