import {View} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;
