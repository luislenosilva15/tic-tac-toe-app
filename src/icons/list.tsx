import React from 'react';
import {Settings2 as Settings} from 'lucide-react-native';

type IconProps = {
  size?: number;
  color?: string;
};

export const icons: Record<string, (props: IconProps) => React.ReactElement> = {
  settings: ({size = 24, color = '#fff'}) => (
    <Settings size={size} color={color} />
  ),
};
