import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";
import defaultTheme from "./styles/themes/default";

function App() {
  const [theme, setTheme] = useState(1);

  const handleChangeTheme = (value) => {
    setTheme(value);
  };

  const generateTheme = () => {
    switch (theme) {
      case 1:
        return createMuiTheme(defaultTheme);
      case 2:
        return createMuiTheme(lightTheme);
      case 3:
        return createMuiTheme(darkTheme);
      default:
        return createMuiTheme(defaultTheme);
    }
  };
  return (
    <div className="App">
      <CssBaseline />
      <MuiThemeProvider theme={generateTheme()}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleChangeTheme(1)}
        >
          theme1
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleChangeTheme(2)}
        >
          theme2
        </Button>
        <Button variant="contained" onClick={() => handleChangeTheme(3)}>
          theme3
        </Button>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
