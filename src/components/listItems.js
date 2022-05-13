import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import FestivalIcon from '@mui/icons-material/Festival';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigate } from "react-router-dom";



export const mainListItems = (
  <React.Fragment>
    <ListItemButton onClick={e => <Navigate to="/home"></Navigate>}>
      <ListItemIcon>
        <HomeIcon/>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton >
    <ListItemButton onClick={e => <Navigate to="/animals"></Navigate>}>
      <ListItemIcon>
        <PetsIcon />
      </ListItemIcon>
      <ListItemText primary="Animals" />
    </ListItemButton>
    <ListItemButton onClick={e => <Navigate to="/reports"></Navigate>}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton onClick={e => <Navigate to="/enclosures"></Navigate>}>
      <ListItemIcon>
        <FestivalIcon />
      </ListItemIcon>
      <ListItemText primary="Enclosures" />
    </ListItemButton>
    <ListItemButton onClick={e => <Navigate to="/staff"></Navigate>}>
      <ListItemIcon>
        <EngineeringIcon />
      </ListItemIcon>
      <ListItemText primary="Staff" />
    </ListItemButton>
    <ListItemButton onClick={e => <Navigate to="/stands"></Navigate>}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Stands" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);