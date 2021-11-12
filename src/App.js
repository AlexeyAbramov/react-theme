import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import './style.css';
import Header from './Components/Header';
import theme from './theme';
import useTheme from './Hooks/useTheme';

const Main = styled.main`
    height:calc(100vh - 60px);
    ${({ theme }) =>
      theme.background &&
      css`
      background: ${theme.background.main}
    `}
`;

export const HeaderContext = React.createContext();

export default function App() {
  const [currentTheme, toggleCurrentTheme] = useTheme();

  return (
    <ThemeProvider
      theme={currentTheme === 'light' ? theme.lightTheme : theme.darkTheme}
    >
      <HeaderContext.Provider value={{ toggleCurrentTheme }}>
        <Header />
      </HeaderContext.Provider>
      <Main />
    </ThemeProvider>
  );
}
