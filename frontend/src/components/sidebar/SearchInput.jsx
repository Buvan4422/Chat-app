import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from '../../globalHooks/useConversation.js';
import useGetConversations from '../../hooks/useGetConversations.js';
const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConvo } = useConversation();

  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = conversations.find((c) =>
      c.userName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConvo(conversation);
      setSearch('');
    } else toast.error('No such user found!');
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-red-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;