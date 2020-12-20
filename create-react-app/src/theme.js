import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ce93d8',
    },
    secondary: {
      main: '#ab47bc',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e7cbeb',
    },
  },
});

export default theme;
