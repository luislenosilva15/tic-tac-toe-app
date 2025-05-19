import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  background-color: ${theme.colors.backgroud};
  gap: 48px;
`;

export const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
  justify-content: center;
  margin-top: 18px;
`;

export const HeaderGameOptionWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const HeaderGameOptionText = styled.Text<{disabled: boolean}>`
  font-size: 12px;
  color: ${({disabled}) =>
    disabled ? theme.colors.gray[700] : theme.colors.gray[200]};
`;

export const HeaderDividerText = styled.Text`
  font-size: 18px;
  color: ${theme.colors.warning.default};
  font-weight: 600;
`;
