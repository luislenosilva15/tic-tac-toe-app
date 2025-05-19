import React, {useCallback, useState} from 'react';
import Modal from '../../../../components/Modal';
import CircleButton from '../../../../components/CircleButton';
import {useTranslation} from 'react-i18next';

import * as S from './styles';
import {GameOption, Props} from './types';
import {TouchableOpacity} from 'react-native';
import Icon from '../../../../icons';
import Button from '../../../../components/Button';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigation/types';
import {theme} from '../../../../styles/theme';

export default function NewGameModal({isOpen, onClose}: Props) {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [gameOption, setGameOption] = useState<GameOption>('none');

  const disabledNewGameButton = gameOption === 'none';

  const isCrossOption = gameOption === 'cross';
  const isCircleOption = gameOption === 'circle';

  const handleOnClose = useCallback(() => {
    setGameOption('none');
    onClose();
  }, [onClose]);

  const handleNewGame = useCallback(() => {
    handleOnClose();
    setTimeout(() => {
      navigation.navigate('SinglePlayer', {
        gameOption,
      });
    }, 500);
  }, [handleOnClose, navigation, gameOption]);

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
      <S.ModalContent>
        <S.Header>
          <CircleButton onPress={handleOnClose} icon="cross" />
          <S.HeaderText>{t('screen.home.modal.title')}</S.HeaderText>
        </S.Header>

        <S.OptionsWrapper>
          <TouchableOpacity onPress={() => setGameOption('cross')}>
            <S.SquareOption disabled={!isCrossOption}>
              <Icon
                name="cross"
                color={
                  isCrossOption
                    ? theme.colors.gray[100]
                    : theme.colors.gray[600]
                }
                size={32}
              />
            </S.SquareOption>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setGameOption('circle')}>
            <S.SquareOption disabled={!isCircleOption}>
              <Icon
                name="circle"
                color={
                  isCircleOption
                    ? theme.colors.gray[100]
                    : theme.colors.gray[600]
                }
                size={32}
              />
            </S.SquareOption>
          </TouchableOpacity>
        </S.OptionsWrapper>

        <Button
          onPress={handleNewGame}
          disabled={disabledNewGameButton}
          value={t('screen.home.modal.start')}
        />
      </S.ModalContent>
    </Modal>
  );
}
