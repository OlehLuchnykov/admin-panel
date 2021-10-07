import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes-pathes';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const Aside = styled.aside`
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 7px 7px 2px rgb(0 0 0 / 40%);
  width: 155px;
  transition: transform .6s linear .5s;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  
  &.open {
    transform: translateX(0);
  }
  
  a {
    padding: 15px 20px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    
    &:hover {
      background-color: purple;
      color: #fff;
      font-weight: 600;
    }
    
    &.has-inner-menu {
      
      &:hover {
        & > .inner-menu {
          z-index: 1;
          opacity: 1;
        }
      }
      
      & > .inner-menu {
        position: absolute;
        left: 100%;
        top: 0;
        z-index: -1;
        opacity: 0;
        max-width: 300px;
        width: 200%;
        height: 100%;
        background: #fff;
      }
    }
  }
`;

const Sidebar = ({ isMenuOpen }) => {
  return (
    <Aside className={isMenuOpen ? 'sidebar open' : 'sidebar'}>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.DASHBOARD}>
              <DashboardRoundedIcon fontSize='large' />
              Dashboard
            </Link>
          </li>
          <li>
            <Link className='has-inner-menu' to={ROUTES.SETTINGS}>
              <SettingsRoundedIcon fontSize='large' />
              Settings
              <ul className='inner-menu'>
                <li><Link>1</Link></li>
                <li><Link>2</Link></li>
                <li><Link>3</Link></li>
                <li><Link>4</Link></li>
              </ul>
            </Link>
          </li>
          <li>
            <Link className='has-inner-menu' to={ROUTES.ADMIN}>
              <AdminPanelSettingsRoundedIcon fontSize='large' />
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </Aside>
  );
}

export default Sidebar;
