import React from 'react';
import {Modal as ModalComponent, Text} from 'react-native';
import {Props} from './types';

import * as S from './styles';

const Modal = ({isOpen, onClose, children}: Props) => {
  return (
    <S.Wrapper>
      <ModalComponent
        transparent={true}
        animationType="fade"
        visible={isOpen}
        onRequestClose={onClose}>
        <S.Overlay>
          <S.ModalView>{children}</S.ModalView>
        </S.Overlay>
      </ModalComponent>
    </S.Wrapper>
  );
};

export default Modal;
