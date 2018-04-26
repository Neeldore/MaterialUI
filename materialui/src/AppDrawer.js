import React , {Component} from 'react';
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import { MenuItem } from 'material-ui';
import './AppDrawer.css';
class AppDrawer extends Component{
    DrawerObj = ()=>{
        return(
            <Drawer open={true} containerClassName="drawer" width={200}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
        </Drawer>
        
        );
    }
    render(){
        return (
            <div>
            <AppBar title="Neelkant K Jain"/>
 <this.DrawerObj />
    </div>
        )
    }
}



export default AppDrawer;