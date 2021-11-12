import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderContext } from '../App';

const Toggle = styled.div`
  cursor: pointer;
  position: relative;
  touch-action: pan-x;
  user-select: none;

  &.checked .toggleButton{
    left: 27px;
  }
  &:hover .toggleButton{
    box-shadow: 0 0 2px 3px #764abc;
  }
`;

const ToggleTrack = styled.div`
  background-color: #4d4d4d;
  border-radius: 30px;
  height: 24px;
  transition: .2s;
  width: 50px; 
`;

const ToggleTracks = styled.div`
  bottom: 0;
  height: 10px;
  margin: auto 0;
  top: -2px;
  position: absolute;
  transition: opacity .25s;
`;

const ToggleTrackLeft = styled(ToggleTracks)`
  left: 8px;
  width: 14px;
`;
const ToggleTrackRight = styled(ToggleTracks)`
  right: 9px;
  width: 10px;
`;

const ToggleButton = styled.div`
  background-color: #fafafa;
  border: 1px solid #4d4d4d;
  border-radius: 50%;
  height: 22px;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: .25s;
  width: 22px;
`;

const ToggleIcon = styled.span`
  align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
  width: 10px;
`;

const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <HeaderContext.Consumer>
      {({ toggleCurrentTheme }) => (
        <Toggle
          className={isChecked ? 'checked' : ''}
          onClick={() => {
            setIsChecked((prevState) => !prevState);
            toggleCurrentTheme();
          }}
        >
          <ToggleTrack>
            <ToggleTrackLeft>
              <ToggleIcon>🌜</ToggleIcon>
            </ToggleTrackLeft>
            <ToggleTrackRight>
              <ToggleIcon>🌞</ToggleIcon>
            </ToggleTrackRight>
            <div role="button"></div>
          </ToggleTrack>
          <ToggleButton className="toggleButton" />
        </Toggle>
      )}
    </HeaderContext.Consumer>
  );
};

export default ThemeToggle;
