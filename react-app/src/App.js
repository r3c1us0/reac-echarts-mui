import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ChartList from './components/ChartList';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChartList />
    </ThemeProvider>
  );
}

export default App;
