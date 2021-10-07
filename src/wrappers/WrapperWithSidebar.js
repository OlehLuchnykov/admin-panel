import { useState } from 'react';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import styled from 'styled-components';

const PageWrapperWithSidebar = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  
  .main {
    min-height: calc(100vh - 68px);
    background-color: #f5f2f2;
    width: 100%;
    transition: width .6s linear .5s;
    padding: 20px 40px;

    &.menu-opened {
      width: calc(100% - 155px);
    }
  }
`;

const WrapperWithSidebar = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const changeMenuHandler = () => {
    setIsMenuOpen((state) => !state);
  };
  return (
    <>
      <Header onBurgerBtnClick={changeMenuHandler} isMenuOpen={isMenuOpen} />
      <PageWrapperWithSidebar>
        <Sidebar isMenuOpen={isMenuOpen} />
        <main className={isMenuOpen ? 'main menu-opened' : 'main'}>
          <div className="container">
            {children}
          </div>
        </main>
      </PageWrapperWithSidebar>
    </>
  );
};

export default WrapperWithSidebar;
