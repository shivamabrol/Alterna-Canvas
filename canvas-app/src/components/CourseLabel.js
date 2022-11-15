import { useState } from "react";
import {
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Spacer,
    HStack,
} from "@chakra-ui/react";
import "../App.css";

const CourseLabel = ({ id, course, changeCourse }) => {
    const [currCourse, setCourse] = useState(course);

    function selectCG() {
        setCourse("Computer Graphics");
        changeCourse();
    }

    function selectN() {
        setCourse("None");
        changeCourse();
    }

    function selectSD() {
        setCourse("Senior Design");
        changeCourse();
    }

    function selectUI() {
        setCourse("User Interface");
        changeCourse();
    }

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Avatar
                    name={currCourse}
                    p={3}
                    _hover={{
                        background: "#d1d1d1",
                        cursor: "pointer",
                    }}
                />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <HStack>
                        <Avatar
                            name={"None"}
                            onClick={selectN}
                            p={3}
                            m={3}
                            _hover={{
                                background: "#d1d1d1",
                                cursor: "pointer",
                            }}
                        />
                        <Spacer />
                        <Avatar
                            name={"Computer Graphics"}
                            onClick={selectCG}
                            p={3}
                            m={3}
                            _hover={{
                                background: "#d1d1d1",
                                cursor: "pointer",
                            }}
                        />
                        <Spacer />
                        <Avatar
                            name={"Senior Design"}
                            onClick={selectSD}
                            p={3}
                            m={3}
                            _hover={{
                                background: "#d1d1d1",
                                cursor: "pointer",
                            }}
                        />
                        <Spacer />
                        <Avatar
                            name={"User Interface"}
                            onClick={selectUI}
                            p={3}
                            m={3}
                            _hover={{
                                background: "#d1d1d1",
                                cursor: "pointer",
                            }}
                        />
                    </HStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default CourseLabel;
