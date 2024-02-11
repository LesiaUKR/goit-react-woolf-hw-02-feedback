import React from 'react';
import { Message } from './NotificationMessage.styled';

export const NotificationMessage = ({ message }) => {
  return <Message>{message}</Message>;
};
