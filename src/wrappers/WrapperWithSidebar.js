import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const WrapperWithSidebar = ({children}) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Sidebar />
        <main className="main">
          <div className="container">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default WrapperWithSidebar;
