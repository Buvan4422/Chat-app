import { useEffect } from 'react';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../globalHooks/useConversation';
import MessageInput from './MessageInput';
import Message from './Messages';
const MessageContainer = () => {
  const { selectedConvo, setSelectedConvo } = useConversation();

  useEffect(() => {
    return () => setSelectedConvo(null);
  }, [setSelectedConvo]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConvo ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-red-400 px-4 py-2 mb-2">
            <span className="label-text text-gray-700">
              To:{' '}
              <span className="text-black font-bold ">
                {selectedConvo.userName}({selectedConvo.fullName})
              </span>
            </span>
          </div>
          <Message />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 userName</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
