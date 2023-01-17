import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  border: 1px solid black;
  display: flex;
  min-width: 0;
  border-bottom: ${({ theme }) =>
    `${theme.sizes.taskbar.entry.borderSize}
    solid
    ${theme.colors.highlight}`};

  width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
    border-bottom: ${({ theme }) =>
      `${theme.sizes.taskbar.entry.borderSize}
    solid
    #5cee11`};
  }

  figure {
    display: flex;
    align-items: center;
    padding: 10px;

    img {
      image-rendering: pixelated;
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }

    figcaption {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
      margin-left: 5px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
  }
`;

export default StyledTaskbarEntry;