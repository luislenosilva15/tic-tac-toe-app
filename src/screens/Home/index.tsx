import React, {useState} from 'react';

import * as S from './styles';

import Button from '../../components/Button';
import {useTranslation} from 'react-i18next';
import NewGameModal from './components/NewGameModal';

export default function Home() {
  const {t} = useTranslation();

  const [showNewGameModal, setShowNewGameModal] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Image source={require('../../images/png/home.png')} />
        <S.Buttons>
          <Button
            onPress={() => setShowNewGameModal(true)}
            value={t('screen.home.buttons.singleplayer')}
          />
          <Button
            onPress={() => {}}
            value={t('screen.home.buttons.multiplayer_local')}
          />
        </S.Buttons>
      </S.Wrapper>

      <NewGameModal
        isOpen={showNewGameModal}
        onClose={() => setShowNewGameModal(false)}
      />
    </>
  );
}
