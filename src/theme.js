import { createMuiTheme }  from '@material-ui/core/styles'

const horribleMagenta = "#FF00FF"
const brightRed = "#D82128"

// see full theme at https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    //primary: { 500: '#008888' },
    primary: {
        main: "#008888",
        light: "#FFFF00",
        dark: "#FFFF00",
        contrastText: "#FF0000",
    },
    secondary: {main: horribleMagenta,},
    error: {main: horribleMagenta,},
    warning: {main: horribleMagenta,},
    info: {main: horribleMagenta,},
    success: {main: horribleMagenta,},
    text: {
        primary: horribleMagenta,
        secondary: brightRed,
        disabled: horribleMagenta,
        hint: horribleMagenta,
    }
  },
})

export default theme
