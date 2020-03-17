
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import AddCircleOutlineIcon from '../SvgIcons/AddCircleOutlineIcon';
import SettingsIcon from '../SvgIcons/SettingsIcon';
import './ConversationList.css';

const ConversationList = () => {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations();
  },[]);

 const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
      const newConversations = response.data.results.map(result => ({
        photo: result.picture.large,
        name: `${result.name.first} ${result.name.last}`,
        text: 'Hello world! This is a long message that needs to be truncated.'
      }));

      setConversations([...conversations, ...newConversations]);
    });
  };

  return (
    <div className='conversation-list'>
      <Toolbar
        title='Messenger'
        leftItems={[
          <SettingsIcon key='add' />
        ]}
        rightItems={[
          <AddCircleOutlineIcon key='cog' />
        ]} />
      <ConversationSearch />
      {conversations.map(conversation => (
        <ConversationListItem
          key={conversation.name}
          data={conversation} />
      ))}
    </div>
  );
};

export default ConversationList;
