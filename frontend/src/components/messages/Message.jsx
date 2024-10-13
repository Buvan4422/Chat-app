import { useAuthContext } from '../../context/AuthContext.jsx';
import useConversation from '../../globalHooks/useConversation';
import { extractTime } from '../../utils/extractTime';
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConvo } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const profilePic = fromMe ? authUser.profilepic : selectedConvo?.profilepic;
  const chatClass = fromMe ? 'chat chat-end' : 'chat chat-start';
  const bubbleBgColor = fromMe ? 'bg-red-500' : '';
  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div>
        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default Message;
