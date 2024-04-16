import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link} from "react-router-dom";

export const mainListItems = (
    <div>
        <Link to="/editor">
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText style={{color: "black"}} primary="EDIT INFORMATION"/>
            </ListItem>
        </Link>
        <Link to="/gallery">
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon><
                ListItemText style={{color: "black"}} primary="PHOTO GALLERY"/>
            </ListItem>
        </Link>
    </div>
);
