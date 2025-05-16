import React from 'react';
import {icons} from './list';
import {IconProps} from './types';

const Icon = ({name, size, color}: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent size={size} color={color} />;
};

export default Icon;
