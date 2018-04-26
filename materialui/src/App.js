import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppDrawer from './AppDrawer'
class App extends Component {
 themeElement = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  fontFamily: 'Roboto, sans-serif'
 });
  render() {
    return (
      <MuiThemeProvider muiTheme={this.themeElement}>
        <div>
    <AppDrawer />
    </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
