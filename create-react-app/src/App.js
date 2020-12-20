import React from 'react';
import { withStyles, Container } from '@material-ui/core';
import { Navigation } from './components/Navigation';

const styles = theme => ({
  container: {
    justifyContent: "center",
    display: "flex",
  }
});

class App extends React.Component {

  render(){
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.container}>
        <Navigation/>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
