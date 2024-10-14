import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import useListen from '../../hooks/useListen.js';
import Message from '../messages/Message.jsx';
import MessageSkeleton from '../skeleton/MessageSkeleton.jsx';
const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListen();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white font-bold">
          Send a message to start convo
        </p>
      )}
    </div>
  );
};

export default Messages;
