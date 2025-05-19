import React from 'react';
import {Settings2 as Settings, X as Close, Circle} from 'lucide-react-native';
import {theme} from '../styles/theme';

type IconProps = {
  size?: number;
  color?: string;
};

export const icons: Record<string, (props: IconProps) => React.ReactElement> = {
  settings: ({size = 24, color = theme.colors.gray[200]}) => (
    <Settings size={size} color={color} />
  ),
  cross: ({size = 24, color = theme.colors.gray[200]}) => (
    <Close size={size} color={color} />
  ),
  circle: ({size = 24, color = theme.colors.gray[200]}) => (
    <Circle size={size} color={color} />
  ),
};
