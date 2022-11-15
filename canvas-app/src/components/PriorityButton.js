import { useState } from "react";
import { Button } from "@chakra-ui/react";

const PriorityButton = ({ id, priority, changePriority }) => {
    const [buttonText, setButtonText] = useState(priority);

    function handleClick() {
        if (buttonText == "!!!") {
            setButtonText("!");
        } else {
            setButtonText(buttonText + "!");
        }
        changePriority(id);
    }

    return <Button onClick={handleClick}>{buttonText}</Button>;
};

export default PriorityButton;
