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
        <Popover>
            <PopoverTrigger>
                <Avatar name={currCourse} />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <HStack>
                        <Avatar name={"None"} onClick={selectN} />
                        <Spacer />
                        <Avatar name={"Computer Graphics"} onClick={selectCG} />
                        <Spacer />
                        <Avatar name={"Senior Design"} onClick={selectSD} />
                        <Spacer />
                        <Avatar name={"User Interface"} onClick={selectUI} />
                    </HStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default CourseLabel;
