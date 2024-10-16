import useGetConversations from '../../hooks/useGetConversations';
import Convo from './Convo';
const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  //console.log('Conversations: ', conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Convo
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
