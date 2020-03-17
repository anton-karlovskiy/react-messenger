
import React from 'react';

import './ConversationSearch.css';

const ConversationSearch = () => (
  <div className='conversation-search'>
    <input
      type='search'
      className='conversation-search-input'
      placeholder='Search Messages' />
  </div>
);

export default ConversationSearch;
