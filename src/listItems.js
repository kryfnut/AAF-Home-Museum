import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
    Switch,
    Link
} from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
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
