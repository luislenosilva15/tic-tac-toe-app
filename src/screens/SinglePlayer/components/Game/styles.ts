import styled from 'styled-components/native';
import {theme} from '../../../../styles/theme';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.gray[900]};
  border-radius: 8px;
  margin: 0 24px;
  padding: 24px;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Square = styled.View<{width?: number; disabled?: boolean}>`
  display: flex;
  border-color: ${({disabled}) =>
    disabled ? theme.colors.gray[800] : theme.colors.gray[100]};
  border-radius: 8px;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  width: ${({width}) => (width ? `${width}px` : '100%')};
  height: ${({width}) => (width ? `${width}px` : '100%')};
`;
