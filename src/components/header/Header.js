import { IconButton } from '@mui/material';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a className="logo">LOGO</a>
        <IconButton
          size="large"
        >
          {/*<MenuIcon />*/}
        </IconButton>
        <div className="profile-info">Username or Login</div>
      </div>
    </header>
  );
};

export default Header;
