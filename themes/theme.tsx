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
        bgColor: "#DEDEDE",
        clickRed: "#6e1619",
        hoverRed: "#96171b",
    },
})

export default theme
