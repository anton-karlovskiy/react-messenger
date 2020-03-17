
import React from 'react';

import Toolbar from '../Toolbar';
import MessageList from '../MessageList';
import MessageInput from '../MessageInput';
import TagFacesIcon from '../SvgIcons/TagFacesIcon';
import InfoOutlineIcon from '../SvgIcons/InfoOutlineIcon';
import VideoCamIcon from '../SvgIcons/VideoCamIcon';
import PhoneInTalkIcon from '../SvgIcons/PhoneInTalkIcon';
import PhotoCameraIcon from '../SvgIcons/PhotoCameraIcon';
import ImageIcon from '../SvgIcons/ImageIcon';
import MicIcon from '../SvgIcons/MicIcon';
import PaymentIcon from '../SvgIcons/PaymentIcon';
import VideoGameAssetIcon from '../SvgIcons/VideoGameAssetIcon';

const Channel = () => (
  <div className='message-panel'>
    <Toolbar
      title='React Loading Patterns'
      rightItems={[
        <InfoOutlineIcon key='info' />,
        <VideoCamIcon key='video' />,
        <PhoneInTalkIcon key='phone' />
      ]} />
    <MessageList />
    <MessageInput rightItems={[
      <PhotoCameraIcon key='photo' />,
      <ImageIcon key='image' />,
      <MicIcon key='audio' />,
      <PaymentIcon key='money' />,
      <VideoGameAssetIcon key='games' />,
      <TagFacesIcon key='emoji' />
    ]} />
  </div>
);

export default Channel;
