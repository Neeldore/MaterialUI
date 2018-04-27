import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import RaisedButton from "material-ui/RaisedButton";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import { MenuItem } from "material-ui";
import TextField from "material-ui/TextField";
import "./AppDrawer.css";
class AppDrawer extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
  DrawerObj = () => {
    return (
      <Drawer
        open={this.state.open}
        containerClassName="drawer-class"
        width={200}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
      </Drawer>
    );
  };
  CardExampleWithAvatar = () => (
    <Card>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/jsa-128.jpg"
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="images/nature-600-337.jpg" alt="" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  );
  render() {
    return (
      <div className="normal-div">
        <div className="appbar-class">
          <AppBar
            title="Neelkant K Jain"
            onLeftIconButtonClick={this.handleClick}
          />
        </div>
        <div >
          <this.DrawerObj />
          <div className="card-class">
            <this.CardExampleWithAvatar />
            <this.CardExampleWithAvatar />
        </div>
        </div>
       
        <div>

        </div>
      </div>
    );
  }
}

export default AppDrawer;
