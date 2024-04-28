import { Box, SvgIcon, SvgIconProps } from "@mui/material";

export interface FacebookIconProps extends SvgIconProps {}

const FacebookIcon = (props: FacebookIconProps) => {
  return (
    <SvgIcon {...props}><path d="m15.128 12.797.373-2.457h-2.334V8.746c0-.672.326-1.328 1.371-1.328H15.6V5.326s-.963-.166-1.884-.166c-1.923 0-3.179 1.177-3.179 3.307v1.873H8.4v2.457h2.137v5.94a8.382 8.382 0 0 0 2.63 0v-5.94h1.961Z"/></SvgIcon>
  );
};

export default FacebookIcon;