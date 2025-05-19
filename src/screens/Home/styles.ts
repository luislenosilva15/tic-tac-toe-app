import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: ${theme.colors.backgroud};
  padding-top: 48px;
`;

export const Image = styled.Image`
  display: flex;
  width: 200px;
  height: 200px;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 48px;
`;
