import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#039bf0',
        },
        secondary: {
            main: '#19857b',
        },
        background: {
            default: '#F5F6F8',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: [
            "Inter",
            "sans-serif",
        ].join(','),
    },
});

export default theme;