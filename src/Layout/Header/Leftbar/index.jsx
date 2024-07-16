import React, { Fragment, useState, useLayoutEffect, useContext } from 'react';
import { Col } from 'reactstrap';
import { AlignCenter } from 'react-feather';
import { Link } from 'react-router-dom';
import { Image } from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';

const Leftbar = () => {
  const { layoutURL, toggleSidebar } = useContext(CustomizerContext);
  const [sidebartoggle, setSidebartoggle] = useState(true);
  const width = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
        if (window.innerWidth <= 1007) {
          toggleSidebar(true);
          const pageWrapper = document.querySelector('.page-wrapper');
          if (pageWrapper) {
            pageWrapper.className = 'page-wrapper compact-wrapper';
          }
        } else {
          toggleSidebar(false);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const responsive_openCloseSidebar = (toggle) => {
    if (width <= 991) {
      const pageHeader = document.querySelector('.page-header');
      const sidebarWrapper = document.querySelector('.sidebar-wrapper');
      const bgOverlay = document.querySelector('.bg-overlay1'); // Use .bg-overlay1

      if (pageHeader) pageHeader.className = 'page-header';
      if (sidebarWrapper) sidebarWrapper.className = 'sidebar-wrapper ';
      if (bgOverlay) {
        bgOverlay.classList.add('active');
      } else {
        console.error('.bg-overlay1 element not found');
      }
    } else {
      const pageHeader = document.querySelector('.page-header');
      const sidebarWrapper = document.querySelector('.sidebar-wrapper');
      const megaMenuContainer = document.querySelector('.mega-menu-container');

      if (toggle) {
        setSidebartoggle(!toggle);
        if (pageHeader) pageHeader.className = 'page-header close_icon';
        if (sidebarWrapper) sidebarWrapper.className = 'sidebar-wrapper close_icon ';
        if (megaMenuContainer) megaMenuContainer.classList.remove('d-block');
      } else {
        setSidebartoggle(!toggle);
        if (pageHeader) pageHeader.className = 'page-header';
        if (sidebarWrapper) sidebarWrapper.className = 'sidebar-wrapper ';
      }
    }
  };

  return (
    <Fragment>
      <div className='bg-overlay1'></div> {/* Add this line */}
      <Col className='header-logo-wrapper col-auto p-0' id='out_side_click'>
        <div className='logo-wrapper'>
          <Link to={`${process.env.PUBLIC_URL}/home/${layoutURL}`}>
            <Image
              attrImage={{
                className: 'img-fluid for-light',
                src: require('../../../assets/images/logo/logo.png'),
                alt: '',
              }}
            />
            <Image
              attrImage={{
                className: 'img-fluid for-dark',
                src: require('../../../assets/images/logo/logo_dark.png'),
                alt: '',
              }}
            />
          </Link>
        </div>
        <div className='toggle-sidebar' onClick={() => responsive_openCloseSidebar(sidebartoggle)} style={window.innerWidth <= 991 ? { display: 'block' } : { display: 'none' }}>
          <AlignCenter className='status_toggle middle sidebar-toggle' id='sidebar-toggle' />
        </div>
      </Col>
    </Fragment>
  );
};

export default Leftbar;
