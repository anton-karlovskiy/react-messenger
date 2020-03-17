
// ray test touch <
import React from 'react';

import ToolbarButton from '../ToolbarButton';
import Toolbar from '../Toolbar';
import MessageList from '../MessageList';
import MessageInput from '../MessageInput';

const Channel = () => (
  <div className='message-panel'>
    <Toolbar
      title='React Loading Patterns'
      rightItems={[
        <ToolbarButton key='info' icon='ion-ios-information-circle-outline' />,
        <ToolbarButton key='video' icon='ion-ios-videocam' />,
        <ToolbarButton key='phone' icon='ion-ios-call' />
      ]} />
    <MessageList />
    <MessageInput rightItems={[
      <ToolbarButton key='photo' icon='ion-ios-camera' />,
      <ToolbarButton key='image' icon='ion-ios-image' />,
      <ToolbarButton key='audio' icon='ion-ios-mic' />,
      <ToolbarButton key='money' icon='ion-ios-card' />,
      <ToolbarButton key='games' icon='ion-logo-game-controller-b' />,
      <ToolbarButton key='emoji' icon='ion-ios-happy' />
    ]} />
  </div>
);

export default Channel;
// ray test touch >
