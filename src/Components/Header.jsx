import React from 'react';
import styled, { css } from 'styled-components';

import ThemeToggle from './ThemeToggle';

const Navbar = styled.nav`
    height:60px;
    
    ${({ theme }) =>
      theme.background &&
      css`
      background:${theme.background.header}
    `};

    padding-right:30px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;
const Header = () => {
  return (
    <Navbar>
      <ThemeToggle />
    </Navbar>
  );
};

export default Header;
