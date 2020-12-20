import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
// import Image from 'material-ui-image';
import GirlOnLaptop from '../assets/girl-on-laptop.jpg';
// import PairProgramming from '../assets/pair-programming.jpg';
// import TinyDevelopers from '../assets/tiny-developers.jpg';
// import WebsiteDesign from '../assets/website-design.jpg';
import { images } from './images';

const styles = theme => ({
  image: {
    [theme.breakpoints.up('md')]: {
      width: '40% !important',
      height: '40% !important',
      border: "red 5px solid",
    }
  }
});

class Popover extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        </div>
      </div>
    );
  }
}

class AccreditImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      popoverOpen: false, 
    }
  }

  togglePopover = () => {
    this.setState({popoverOpen: !this.state.popoverOpen})
  }

  render() {
    const { classes } = this.props;
    const { popoverOpen } = this.state;

    const imageAccreditLink = images.map((author, key) => {
      if (this.props.componentName === 'HomePage'){
        return (
          <div key={key}>
            {author.GirlOnLaptopAuthor}
          </div>
        )
      } else if (this.props.componentName === 'HtmlAccordion'){
        return (
          <div key={key}>
            {author.PairProgrammingAuthor}
          </div>
        )
      } else if (this.props.componentName === 'CssAccordion'){
        return (
          <div key={key}>
            {author.TinyDevelopersAuthor}
          </div>
        )
      } else {
          <div key={key}>
            {author.WebsiteDesign}
          </div>
        }
      });

    return (
      <>
        <img
          onMouseEnter={this.togglePopover}
          onMouseLeave={this.togglePopover}
          src={GirlOnLaptop}
          className={classes.image}
        />
        {
          popoverOpen ?
          <Popover
            text={imageAccreditLink}
            onMouseLeave={this.togglePopover}
          />
        : null
        }
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AccreditImage);
