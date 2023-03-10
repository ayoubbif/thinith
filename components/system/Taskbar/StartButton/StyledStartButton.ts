import styled from 'styled-components';
import Button from 'styles/generic/Button';

const StyledStartButton = styled(Button)`
  display: flex;
  place-content: center;
  place-items: center;
  fill: ${({ theme }) => theme.colors.startButton};
  font-size: ${({ theme }) => theme.sizes.startButton.iconSize};
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: ${({ theme }) => theme.sizes.startButton.width};

  svg {
    height: ${({ theme }) => theme.sizes.startButton.iconSize};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};

    svg {
      fill: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;
