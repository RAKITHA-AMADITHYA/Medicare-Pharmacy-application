import { Box } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header sx={{ flex: '0 0 auto', height: '64px' }} />
      
      <Box sx={{ flex: '1 1 auto', overflowY: 'auto' }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
