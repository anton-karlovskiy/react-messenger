
import React, { useEffect, useState } from 'react';
// ray test touch <
// import moment from 'moment';
// ray test touch >

import Message from '../Message';
import './MessageList.css';

const MY_USER_ID = 'apple';

const getTempMessages = () => {
  const tempMessages = [
    {
      id: 1,
      author: 'apple',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 2,
      author: 'orange',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
    {
      id: 3,
      author: 'orange',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 4,
      author: 'apple',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
    {
      id: 5,
      author: 'apple',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 6,
      author: 'apple',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
    {
      id: 7,
      author: 'orange',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 8,
      author: 'orange',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    },
    {
      id: 9,
      author: 'apple',
      message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
      timestamp: new Date().getTime()
    },
    {
      id: 10,
      author: 'orange',
      message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
      timestamp: new Date().getTime()
    }
  ];
  
  return tempMessages;
};

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const tempMessages = getTempMessages();
    setMessages([...messages, ...tempMessages]);
  },[]);

  const renderMessages = () => {
    let index = 0;
    const messageCount = messages.length;
    let tempMessages = [];

    while (index < messageCount) {
      const previous = messages[index - 1];
      const current = messages[index];
      const next = messages[index + 1];
      const isMine = current.author === MY_USER_ID;
      // ray test touch <
      // let currentMoment = moment(current.timestamp);
      // ray test touch >
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        // ray test touch <
        // const previousMoment = moment(previous.timestamp);
        // const previousDuration = moment.duration(currentMoment.diff(previousMoment));
        const isPrevWithinAnHour = true;
        // ray test touch >
        prevBySameAuthor = previous.author === current.author;
        
        // ray test touch <
        if (prevBySameAuthor && isPrevWithinAnHour) {
          startsSequence = false;
        }
        // ray test touch >

        // ray test touch <
        if (isPrevWithinAnHour) {
          showTimestamp = false;
        }
        // ray test touch >
      }

      if (next) {
        // ray test touch <
        // const nextMoment = moment(next.timestamp);
        // const nextDuration = moment.duration(nextMoment.diff(currentMoment));
        const isNextWithinAnHour = true;
        // ray test touch >
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && isNextWithinAnHour) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={index}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current} />
      );

      // proceed to the next message
      index += 1;
    }

    return tempMessages;
  };

  return (
    <div className='message-list'>{renderMessages()}</div>
  );
};

export default MessageList;
