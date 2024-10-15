declare module "header/Header" {
  const Header: React.ComponentType<{ store: Store<RootState> }>;
  export default Header;
}

declare module "footer/Footer" {
  const Footer: React.ComponentType;
  export default Footer;
}