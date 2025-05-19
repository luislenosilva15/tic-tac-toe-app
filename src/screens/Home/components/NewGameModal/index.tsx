import React from 'react';
import Modal from '../../../../components/Modal';
import CircleButton from '../../../../components/CircleButton';
import {useTranslation} from 'react-i18next';

import * as S from './styles';
import {Props} from './types';
import {TouchableOpacity} from 'react-native';
import Icon from '../../../../icons';
import {theme} from '../../../../styles/theme';
import Button from '../../../../components/Button';

export default function NewGameModal({isOpen, onClose}: Props) {
  const {t} = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalContent>
        <S.Header>
          <CircleButton onPress={onClose} icon="close" />
          <S.HeaderText>{t('screen.home.modal.title')}</S.HeaderText>
        </S.Header>

        <S.OptionsWrapper>
          <TouchableOpacity>
            <S.SquareOption>
              <Icon name="close" color={theme.colors.gray[600]} size={32} />
            </S.SquareOption>
          </TouchableOpacity>

          <TouchableOpacity>
            <S.SquareOption>
              <Icon
                name="circle"
                color={theme.colors.secondary.opaque}
                size={32}
              />
            </S.SquareOption>
          </TouchableOpacity>
        </S.OptionsWrapper>

        <Button disabled={true} value={t('screen.home.modal.start')} />
      </S.ModalContent>
    </Modal>
  );
}
