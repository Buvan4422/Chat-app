import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../globalHooks/useConversation';
const useListen = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off('newMessage');
  }, [socket, setMessages, messages]);
};

export default useListen;
