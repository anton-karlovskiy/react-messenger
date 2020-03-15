
import React from 'react';
import './MessageInput.css';

const MessageInput = ({ rightItems }) => (
  <div className='message-input'>
    <input
      type='text'
      className='text-input'
      placeholder='Type a message, @name' />
    {rightItems}
  </div>
);

export default MessageInput;
