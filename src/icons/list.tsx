import React from 'react';
import {Settings2 as Settings, X as Close, Circle} from 'lucide-react-native';

type IconProps = {
  size?: number;
  color?: string;
};

export const icons: Record<string, (props: IconProps) => React.ReactElement> = {
  settings: ({size = 24, color = '#fff'}) => (
    <Settings size={size} color={color} />
  ),
  close: ({size = 24, color = '#fff'}) => <Close size={size} color={color} />,
  circle: ({size = 24, color = '#fff'}) => <Circle size={size} color={color} />,
};
