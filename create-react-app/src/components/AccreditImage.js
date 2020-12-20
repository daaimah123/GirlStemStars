import React from 'react';
import { makeStyles, Popover, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import GirlOnLaptop from '../assets/girl-on-laptop.jpg';

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.up('md')]: {
      width: '40% !important',
      height: '40% !important',
      border: "red 5px solid",
    }
  }
}));

export default function AccreditImage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Image
        // onClick={this.÷}
        src={GirlOnLaptop}
        className={classes.image}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        id='mouse-over-popover'
        open={open}
        onClose={handlePopoverClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableRestoreFocus
      >
        <Typography>Image designed by imageAuthor </Typography>
      </Popover>
    </>
  );
}
