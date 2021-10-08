import React from 'react';
import { Button, IconButton, MenuItem, Menu } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes-pathes';
import { useContext } from 'react';
import AuthContext from '../../AuthContext';

const HeaderBox = styled.header`
  width: 100%;
  padding: 10px 20px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    
  .header-left-box {
    display: flex;
    align-items: center;
  }
  
  .logo {
    font-size: 40px;
    color: purple;
    text-decoration: none;
  }
  
  .burger-btn {
    margin-left: 20px;
  }
  
  a {
    font-size: 18px;
    color: purple;
    font-weight: 600;
    text-decoration: none;
  }
  
`;

const Header = ({ onBurgerBtnClick, isMenuOpen }) => {
  const authContext = useContext(AuthContext);
  const isAuth = authContext.isLoggedIn;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const burgerBtnClickHandler = () => {
   onBurgerBtnClick();
  }

  return (
    <HeaderBox>
      <div className="container">
        <div className="header-left-box">
          <Link to='/' className="logo">LOGO</Link>
          <IconButton
            className='burger-btn'
            size="large"
            onClick={burgerBtnClickHandler}
          >
            {isMenuOpen ? <MenuRoundedIcon /> : <MenuOpenIcon />}
          </IconButton>
        </div>
        <div className="profile-info">
          { isAuth ? (
            <>
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Profile
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={authContext.logout}>Logout</MenuItem>
              </Menu>
            </>
          ) : <Link to={ROUTES.LOGIN}>Login</Link>}
        </div>
      </div>
    </HeaderBox>
  );
};

export default Header;
