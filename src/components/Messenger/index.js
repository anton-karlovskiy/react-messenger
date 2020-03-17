import React from 'react';

import ConversationList from '../ConversationList';
import Channel from '../Channel';
import './Messenger.css';

const Messenger = props => (
  <div className='messenger'>
    <div className='scrollable sidebar'>
      <ConversationList />
    </div>
    <div className='scrollable content'>
      <Channel />
    </div>
  </div>
);

export default Messenger;
