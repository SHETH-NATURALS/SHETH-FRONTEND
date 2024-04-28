import { Box, SvgIcon, SvgIconProps } from "@mui/material";

export interface TiktokiconProps extends SvgIconProps {}

const Tiktokicon = (props: TiktokiconProps) => {
  return (
    <SvgIcon {...props}><path d="M15.145 4.8h-2.486v9.809a2.139 2.139 0 0 1-2.146 2.128 2.14 2.14 0 0 1-2.147-2.128c0-1.148.935-2.087 2.083-2.129v-2.463C7.92 10.06 5.88 12.083 5.88 14.61c0 2.546 2.083 4.591 4.654 4.591 2.57 0 4.653-2.066 4.653-4.591V9.58a5.849 5.849 0 0 0 3.293 1.085V8.202c-1.87-.063-3.335-1.565-3.335-3.402Z"/></SvgIcon>
  );
};

export default Tiktokicon;