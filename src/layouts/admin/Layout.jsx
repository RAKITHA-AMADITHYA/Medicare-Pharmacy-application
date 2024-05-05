import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './SideBar';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Layout() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden', backgroundColor: '#eeeeee' }}>
        <Box
          sx={{
            flex: { xs: 'none', md: isFullScreen ? '0' : '2', lg: isFullScreen ? '0' : '1' },
            overflowY: 'hidden', // Prevent sidebar from scrolling
            display: { xs: 'none', md: 'block', lg: 'block' },
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            flex: '10',
            overflowY: 'auto', // Allow outlet to scroll
            display: 'block',
          }}
        >
          
          
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
