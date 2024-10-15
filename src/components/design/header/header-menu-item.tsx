interface Props {
  href: String;
  title: String;
}

function HeaderMenuItem({ href, title }: Props) {
  return (
    <a href={"" + href} className="hover:text-accentCyan gap-5">
      {title}
    </a>
  );
}
export default HeaderMenuItem;
