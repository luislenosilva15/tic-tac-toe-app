import React from 'react';
import {Text} from 'react-native';
import Modal from '../../../../components/Modal';
import {Props} from './types';

export default function EndGameModal({isOpen, onClose}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Text>end game</Text>
    </Modal>
  );
}
