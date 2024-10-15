import HeaderMenuItem from "./header-menu-item";
import ModeButton from "./mode-buton";

function HeaderMenu() {
  const menuItems = [
    {
      href: "home",
      title: "Home",
    },
    {
      href: "donate",
      title: "Donate Us",
    },
    {
      href: "prayer-time",
      title: "Prayer Time",
    },
    {
      href: "contact-us",
      title: "Contact Us",
    },
  ];
  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
      {menuItems.map((item) => (
        <HeaderMenuItem href={item.href} title={item.title} />
      ))}
      <ModeButton />
    </div>
  );
}
export default HeaderMenu;
