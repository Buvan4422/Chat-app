const Convo = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-red-400 reounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 ">John Doe</p>
            <span className="text-xl">😭</span>
          </div>
        </div>
      </div>
      <div className="divider py-0 my-0 h-1"></div>
    </>
  );
};

export default Convo;
