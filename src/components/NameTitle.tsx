import { Typography } from "@mui/material";
import React from "react";

interface NameTitleProps {
    name: string;
};

const NameTitle: React.FC<NameTitleProps> = ({name}) => {
    return (
        <div className='name-title'>
            <Typography
                variant='h2'
                fontFamily='sans-serif'
            >
                {name}
            </Typography>
            <Typography variant="h6">
                Full-Stack Engineer
            </Typography>
            <hr className="title-hr"/>
        </div>
    );
};

export default NameTitle;


 