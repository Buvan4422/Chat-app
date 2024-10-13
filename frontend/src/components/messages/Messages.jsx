import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import Message from '../messages/Message.jsx';
import MessageSkeleton from '../skeleton/MessageSkeleton.jsx';
const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
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
