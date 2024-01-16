import React from 'react';
import Bot from '../assets/images/bot.png';
import styled from 'styled-components';

const BotImg = styled.img`
  width: 100%;
`;

const BottomBar = () => {
  return <BotImg src={Bot} />;
  // return <BotImg src={Bot} id='contact' />;
};

export default BottomBar;
