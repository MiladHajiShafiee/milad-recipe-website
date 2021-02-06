import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF8C00',
        },
        secondary: {
            main: amber[500],
        },
        common: {
            gray: '#eaeaea',
        },
    },
    typography: {
        color: '#eaeaea',
        fontFamily: 'Quicksand',
    },
});

export default theme;
