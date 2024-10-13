import useConversation from '../../globalHooks/useConversation';
const Convo = ({ conversation }) => {
  const { selectedConvo, setSelectedConvo } = useConversation();

  const isSelected = selectedConvo?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-red-500 reounded p-2 py-1 cursor-pointer 
          ${isSelected ? 'bg-red-500' : ''}
      `}
        onClick={() => setSelectedConvo(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 ">{conversation.userName}</p>
          </div>
        </div>
      </div>
      <div className="divider py-0 my-0 h-1"></div>
    </>
  );
};

export default Convo;
