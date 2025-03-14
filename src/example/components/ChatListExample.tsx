import Identicon from 'identicon.js'
import React, { useEffect, useState } from 'react'
import { BsListTask } from 'react-icons/bs'
import ChatList from '../../ChatList/ChatList'
import SideBar from '../../SideBar/SideBar'
import { IChatItemProps } from '../../type'
import { FaUsers } from 'react-icons/fa'
import {loremIpsum} from '../utils/textUtils'

function Test(params: any) {
  return (
    <div className='rce-citem-body--bottom-status-icon' onClick={() => console.log('clicked')}>
      <span
        style={{
          'fontSize': '10px',
          'position': 'absolute',
          'padding': '2px',
          'right': '-12px',
          'top': '-6px',
          'color': 'white',
          'borderRadius': '100%',
          'width': '12px',
          'height': '12px',
          'textAlign': 'center',
        }}
      >
        {Math.ceil(Math.random() * 9) + 1}
      </span>
      <BsListTask />
    </div>
  )
}

function ChatListExample() {
  const photo = (size: number) => {
    return new Identicon(String(Math.random()) + String(Math.random()), {
      margin: 0,
      size: size || 20,
    }).toString()
  }

  const [chatListAray, setChatListAray] = useState<IChatItemProps[]>([
    {
      id: String(Math.random()),
      avatar: `data:image/png;base64,${photo(20)}`,
      avatarFlexible: true,
      statusColor: 'lightgreen',
      statusColorType: Math.floor((Math.random() * 100) % 2) === 1 ? 'encircle' : undefined,
      alt: loremIpsum({ count: 2, units: 'words' }),
      title: loremIpsum({ count: 2, units: 'words' }),
      date: new Date(),
      subtitle: loremIpsum({ count: 1, units: 'sentences' }),
      unread: Math.floor((Math.random() * 10) % 3),
      muted: Math.floor((Math.random() * 10) % 2) === 1,
      showMute: Math.floor((Math.random() * 10) % 2) === 1,
      showVideoCall: Math.floor((Math.random() * 10) % 2) === 1,
      customStatusComponents: [Test],
    },
  ])

  useEffect(() => {
    if (chatListAray.length === 5) return
    setChatListAray([
      ...chatListAray,
      getRandomChat(),
    ])
  }, [chatListAray])

  const getRandomChat: any = (nested = true) => {
    return {
      id: String(Math.random()),
      avatar: `data:image/png;base64,${photo(20)}`,
      avatarFlexible: true,
      statusColor: 'lightgreen',
      statusColorType: Math.floor((Math.random() * 100) % 2) === 1 ? 'encircle' : undefined,
      alt: loremIpsum({ count: 2, units: 'words' }),
      title: loremIpsum({ count: 2, units: 'words' }),
      date: new Date(),
      subtitle: loremIpsum({ count: 1, units: 'sentences' }),
      unread: Math.floor((Math.random() * 10) % 3),
      muted: Math.floor((Math.random() * 10) % 2) === 1,
      showMute: Math.floor((Math.random() * 10) % 2) === 1,
      showVideoCall: Math.floor((Math.random() * 10) % 2) === 1,
      customStatusComponents: [Test],
      subTextElement: Math.floor((Math.random() * 100) % 2) === 1 ? getSubTextElement() : <></>,
    };
  }

  const getSubTextElement = () => {
    return (
        <div className='chat-item-sub-text'>
            <FaUsers />
            <span>{loremIpsum({ count: 2, units: 'words' })}</span>
        </div>
    )
  }

  return (
    <div className='chat-list'>
      <SideBar
        data={{
          center: (
            <ChatList
              dataSource={chatListAray}
              onClickMute={({ ...props }) => console.log(props)}
              onClickVideoCall={({ ...props }) => console.log(props)}
              id={''}
              lazyLoadingImage={''}
              onDragEnter={(e: React.DragEventHandler, id: number) => console.log(e, id, 'onDragEnter')}
              onDragLeave={(e: React.DragEventHandler, id: number) => console.log(e, id, 'onDragLeave')}
              onDrop={(e: React.DragEventHandler, id: number) => console.log(e, id, 'onDrop')}
              onDragComponent={() => <div className='on-drag-mlist'>{loremIpsum({ count: 4, units: 'words' })}</div>}
            />
          ),
        }}
      />
    </div>
  )
}

export default ChatListExample
