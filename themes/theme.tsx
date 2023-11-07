import { extendTheme } from "@chakra-ui/react"

const breakpoints = {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
}

const theme = extendTheme({
    colors: {
        red: '#EC1D23',
        bgColor: "DEDEDE",
        click: "#a60202",
    },
})

export default theme
