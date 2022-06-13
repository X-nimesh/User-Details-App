// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    colors: {
        blue1: '#70a9e6',
        bg: '#f2f5f8'
    },
})