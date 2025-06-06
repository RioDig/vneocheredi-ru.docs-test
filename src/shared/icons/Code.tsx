import { SvgIcon, SvgIconProps } from '@mui/material'

function CodeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M6,6V18H10V16H8V8H10V6H6M16,16H14V18H18V6H14V8H16V16Z"
      />
    </SvgIcon>
  )
}

export { CodeIcon }
export default CodeIcon