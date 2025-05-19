import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Wrapper = styled.View`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${theme.colors.gray[700]};
`;
