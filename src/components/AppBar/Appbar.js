import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useHistory, useLocation } from 'react-router-dom';
import { Externalization } from '../../router/base/externalization';

export function ControlledAppbar() {
  
  const router = useHistory()
  const currentLocation = useLocation()
  const [currentState, setCurrentState] = useState('home')
  const handlePushToLogin = () => {
    setCurrentState('Login')
    router.push(Externalization.Login.path)
  }
  useEffect(() => {
    if(currentLocation.pathname == '/') {
      setCurrentState('Home')
    }
  }, [])
 return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Inventory System MP2
          </Typography>
          <Button color="inherit">Home</Button>
          {
            currentState == 'Home' && <Button color="inherit" onClick={handlePushToLogin}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}