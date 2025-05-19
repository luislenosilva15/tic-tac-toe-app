import styled from 'styled-components/native';
import {theme} from '../../../../styles/theme';

export const ModalContent = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.gray[100]};
`;

export const OptionsWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-direction: row;
`;

export const SquareOption = styled.View`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border-color: ${theme.colors.gray[600]};
  border-width: 2px;
`;
