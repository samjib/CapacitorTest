import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import AppBar from '@mui/material/AppBar';
import CameraPage from './Pages/Camera/CameraPage';
import HomePage from './Pages/Home/HomePage';
import LocalNotificationPage from './Pages/LocalNotifications/LocalNotificationsPage';
import { createTheme, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Camera, ChevronLeft, GraphicEq, Home, ListAltOutlined, LocationOn, Menu, NotificationAdd, Notifications, Share, Vibration } from '@mui/icons-material';
import GeolocationPage from './Pages/Geolocation/GeolocationPage';
import SharePage from './Pages/Share/SharePage';
import HapticPage from './Pages/Haptic/HapticPage';
import ChartsPage from './Pages/Charts/ChartsPage';
import { ReactChart } from 'chartjs-react';
import { BarController, LinearScale, PointElement, BarElement, TimeScale, Tooltip, ScatterController, LineElement } from 'chart.js';
import ToastPage from './Pages/Toast/Toast';
import ActionSheetPage from './Pages/ActionSheet/ActionSheetPage';

function App() {

  ReactChart.register(BarController, PointElement, LineElement, ScatterController, LinearScale, BarElement, TimeScale, Tooltip);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createTheme({    
    palette: {
      mode: "dark",
      primary: {
        main: "#003fad",
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerOpen}
              sx={{ mr: 2, ...(open && { display: 'none' }) }} >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Capacitor Test
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="App" style={{ marginTop: "100px" }}>
          <Drawer open={open}>
            <div>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeft />
              </IconButton>
            </div>
            <Divider />
            <List>
              {
                [
                  { title: "Home", href: "/", icon: <Home /> },
                  { title: "Local Notifications", href: "/local-notifications", icon: <Notifications /> },
                  { title: "Camera", href: "/camera", icon: <Camera /> },
                  { title: "Geolocation", href: "/geolocation", icon: <LocationOn /> },
                  { title: "Share", href: "/share", icon: <Share /> },
                  { title: "Haptic", href: "/haptic", icon: <Vibration /> },
                  { title: "Charts", href: "/charts", icon: <GraphicEq /> },
                  { title: "Toast", href: "/toast", icon: <NotificationAdd /> },
                  { title: "Action Sheet", href: "/action-sheet", icon: <ListAltOutlined /> },
                ].map(menuItem =>
                  <ListItem key={menuItem.title} button component={Link} to={menuItem.href} onClick={handleDrawerClose}>
                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                    <ListItemText primary={menuItem.title} />
                  </ListItem>)
              }
            </List>
          </Drawer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/local-notifications" element={<LocalNotificationPage />} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/geolocation" element={<GeolocationPage />} />
            <Route path="/share" element={<SharePage />} />
            <Route path="/haptic" element={<HapticPage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/toast" element={<ToastPage />} />
            <Route path="/action-sheet" element={<ActionSheetPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

//@capacitor/clipboard
//dialog
//screen reader
//splash screen