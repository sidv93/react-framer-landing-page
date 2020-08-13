import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { useGlobalStateContext } from './context/globalContext';

const GlobalStyles = createGlobalStyle`
    html {
      font-size: 16px;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }

    *, *:before, *:after {
      box-sizing: inherit;
      text-decoration: none;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${props => props.theme.background};
      overscroll-behavior: none;
      overflow-x: hidden;
    }
`;

const darkTheme = {
  background: '#000',
  text: '#fff',
  red: '#ea291e'
};

const lightTheme = {
  background: '#fff',
  text: '#000',
  red: '#ea291e'
};

function App() {
  const { currentTheme } = useGlobalStateContext();
  return (
    <Router>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </Router>
  );
}

export default App;
