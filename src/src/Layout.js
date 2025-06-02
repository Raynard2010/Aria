import { Outlet } from 'react-router-dom';
import LeftSidebar from './/components/LeftSidebar.js';
import Footer from './/components/Footer.js';
import Header from './/components/Header.js'
import RightSidebar from './/components/RightSidebar.js'
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <div className="left-sidebar">
        <LeftSidebar />
      </div>

      <div className="header">
        <Header />
      </div>

      <div className="right-sidebar">
                <RightSidebar />
      </div>
      

        <div className="main-content">
            <Outlet /> 
        </div>

        <div className="footer">
        <Footer/> 

        </div>
    </div>
  );
};

export default Layout;
