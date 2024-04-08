// App.tsx

import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import store from "./redux/store"
import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from "@mui/material";
//theme
import { ColorModeContext, useMode } from './layout/Theme/themes';

function App() {
  const [theme, colorMode] = useMode();
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    

          <Provider store={store}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Provider>
      </ThemeProvider>

    </ColorModeContext.Provider>

  );
}

export default App;
