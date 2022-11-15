import React, { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
    const [content, setContent] = useState("");
    const toast = useToast();

    function handleSubmit(e) {
        e.preventDefault();

        if (!content) {
            toast({
                title: "No content",
                status: "error",
                duration: 2000,
                isClosable: true,
            });

            return;
        }

        const todo = {
            id: nanoid(),
            body: splitInputTask(content)[0],
            priority: splitInputTask(content)[1],
            course: "None",
        };

        addTodo(todo);
        setContent("");
    }

    function splitInputTask(task) {
        const splitText = task.split("!");
        let priority = "!";

        if (
            typeof splitText[1] == "undefined" ||
            splitText[1] == "" ||
            isNaN(splitText[1])
        ) {
            priority = "!";
        } else {
            let priorityInt = parseInt(splitText[1]);
            if (priorityInt <= 1) {
                priority = "!";
            } else if (priorityInt >= 3) {
                priority = "!!!";
            } else {
                priority = "!!";
            }
        }

        return [splitText[0], priority];
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt="8">
                <Input
                    variant="filled"
                    placeholder="Input Task"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button type="submit" colorScheme="cyan" px="8">
                    Add Todo
                </Button>
            </HStack>
        </form>
    );
};
export default AddTodo;
