// this file generate dynamic title and description 
// it styles with custom class if needed you can pass
// and simply send position like 'center, right' to align the text


import { Description } from "../ui/Description";
import { Heading } from "../ui/Heading";

export const TitleAndDescription = ({ title, description, customstyleTitle, customstyleDescription, titlePosition, descPosition, positionBoth }) => {
    return (
        <div>

            {/* position both for title and description to avoid sending position twice  */}
            <Heading position={positionBoth || titlePosition} customStyle={customstyleTitle} title={title} />
            <Description position={positionBoth || descPosition} customStyle={customstyleDescription} description={description} />
        </div>
    );
};

