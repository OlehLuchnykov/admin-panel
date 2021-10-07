import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes-pathes';

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
  const isAuth = true;
  const burgerBtnClickHandler = () => {
   onBurgerBtnClick();
  }
  return (
    <HeaderBox>
      <div className="container">
        <div className="header-left-box">
          <Link className="logo">LOGO</Link>
          <IconButton
            className='burger-btn'
            size="large"
            onClick={burgerBtnClickHandler}
          >
            {isMenuOpen ? <MenuRoundedIcon /> : <MenuOpenIcon />}
          </IconButton>
        </div>
        <div className="profile-info">
          { isAuth ? <Link to={ROUTES.LOGIN}>Login</Link> : <span>Profile</span> }
        </div>
      </div>
    </HeaderBox>
  );
};

export default Header;
