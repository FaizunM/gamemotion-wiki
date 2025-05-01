export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-12 w-[calc(100vw-64px)] h-16 flex items-center place-content-between px-4  text-sm font-semibold z-999">
        <div className="flex items-center border border-[rgba(255,255,255,0.1)] rounded backdrop-blur-2xl">
          <div className="w-10 h-10 flex items-center justify-center">
            <i className="fa-light fa-search"></i>
          </div>
          <input
            type="text"
            placeholder="Search Wiki"
            className="outline-none w-[300px]"
          />
          <div className="w-6 h-6 flex items-center justify-center border border-[rgba(255,255,255,0.1)] mr-2 rounded">
            <i className="fa-light fa-slash text-xs "></i>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center hover:bg-[rgba(255,255,255,0.1)] rounded">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="fa-light fa-wallet"></i>
            </div>
            <div className="px-3">Support Us</div>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.1)]">
            <i className="fa-light fa-user-circle"></i>
          </div>
        </div>
      </nav>
    </>
  );
};
