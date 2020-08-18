import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { useGlobalStateContext, useGlobalDispatchContext } from './context/globalContext';
import CustomCursor from './components/CustomCursor';
import HomeBanner from './components/homepage/HomeBanner';
import Navigation from './components/Navigation';
import HomeContent from './components/homepage/HomeContent';
import HomeFeature from './components/homepage/HomeFeature';
import HomeAbout from './components/homepage/HomeAbout';
import Footer from './components/Footer';

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

function App() {
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType })
  }
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0
  });
  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`
  };

  const lightTheme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`
  };
  return (
    <Router>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <CustomCursor toggleMenu={toggleMenu} />
        <Header onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}
          hamburgerPosition={hamburgerPosition} setHamburgerPosition={setHamburgerPosition} />
        <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} onCursor={onCursor} />
        <HomeBanner onCursor={onCursor} />
        <HomeContent />
        <HomeFeature onCursor={onCursor} />
        <HomeAbout onCursor={onCursor} />
        <Footer onCursor={onCursor} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
