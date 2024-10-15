function HeaderLogo() {
  const styleHeader =
    "dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10";

  return (
    <div className={styleHeader}>
      <img src="/src/assets/images/logo-dark-mode.svg" alt="logo" />
    </div>
  );
}

export default HeaderLogo;
