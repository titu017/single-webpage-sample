import HeaderLogo from "../design/header/header-logo";
import HeaderMenu from "../design/header/header-menu";

function Header() {
  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
      <HeaderLogo />
      <HeaderMenu />
    </header>
  );
}

export default Header;
