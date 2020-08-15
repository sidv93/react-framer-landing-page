import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { useGlobalStateContext, useGlobalDispatchContext } from './context/globalContext';
import CustomCursor from './components/CustomCursor';
import HomeBanner from './components/homepage/HomeBanner';

const GlobalStyles = createGlobalStyle`
    html {
      font-size: 16px;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }

    *, *:before, *:after {
      box-sizing: inherit;
      text-decoration: none;
      cursor: none;
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
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({type: 'CURSOR_TYPE', cursorType})
  }
  return (
    <Router>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <CustomCursor />
        <Header onCursor={onCursor} />
        <HomeBanner onCursor={onCursor} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
