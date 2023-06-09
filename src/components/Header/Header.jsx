import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import useTelegram from '../../hooks/useTelegram';

const Header = () => {
  const { tg, user, onClose } = useTelegram();

  return (
    <div className="header">
      <Button onClickBtn={onClose}>Закрыть</Button>
      <span className="username">{user?.username}</span>
    </div>
  );
};

export default Header;
