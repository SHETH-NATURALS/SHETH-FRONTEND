"use client"

import { Box, SvgIcon, SvgIconProps } from "@mui/material";

export interface IngredientIconProps extends SvgIconProps {}

const IngredientIcon = (props: IngredientIconProps) => {
  return (
    <SvgIcon {...props}><Box strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.889 8.035c4.065-2.691 8.272-.76 12.16-4.978.905-.984.38 11.04-4.487 15.595-3.557 3.328-9.05 2.957-10.902-.277-1.852-3.235-.836-7.649 3.229-10.34ZM5.211 18c-.862.472-1.754.752-2.927.857" component="path" sx={{stroke:(theme)=>theme.palette[props.color||'secondary'].main}}/></SvgIcon>
  );
};

export default IngredientIcon;