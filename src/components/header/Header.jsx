import { Logo, Nav, SignIn, SideNav } from "./";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-white/80 border-b-2 border-gray-100  backdrop-blur-xl z-10">
        <div className="flex justify-between header-px items-center global-px">
          <Logo />
          <Nav />
          <SignIn />
          <SideNav />
        </div>
      </header>
    </>
  );
};

export default Header;
