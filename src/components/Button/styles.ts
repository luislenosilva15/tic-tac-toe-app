import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Text = styled.Text<{disabled: boolean}>`
  font-size: 16px;
  color: ${({disabled}) =>
    disabled ? theme.colors.gray[700] : theme.colors.gray[100]};
`;

export const Wrapper = styled.View<{disabled: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({disabled}) =>
    disabled ? theme.colors.gray[900] : theme.colors.gray[800]};
  padding: 12px;
  border-radius: 8px;
`;
