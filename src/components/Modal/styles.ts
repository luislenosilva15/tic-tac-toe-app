import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Overlay = styled.View`
  display: flex;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  display: flex;
  width: 80%;
  background-color: ${theme.colors.backgroud};
  border-radius: 12px;
  padding: 20px;
  align-items: center;
`;
