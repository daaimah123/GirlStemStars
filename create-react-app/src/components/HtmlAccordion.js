import React from 'react';
import {
  withStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@material-ui/core';
// import { ExpandMoreIcon } from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class HtmlAccordion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      setExpanded: false,
    }
  }

  handleChange = (panel) => (event, isExpanded) => {
    // setExpanded(isExpanded ? panel : false);
    this.setState({expanded: true, setExpanded: panel});
  };

  render(){ 
    const {expanded } = this.state;
    const { classes } = this.props;
    return (

      <div className={classes.root}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={this.handleChange('panel1')}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>General settings</Typography>
              <Typography className={classes.secondaryHeading}>
                I am an accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={this.handleChange('panel2')}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>Users</Typography>
              <Typography className={classes.secondaryHeading}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={this.handleChange('panel3')}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>Advanced settings</Typography>
              <Typography className={classes.secondaryHeading}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={this.handleChange('panel4')}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HtmlAccordion);

