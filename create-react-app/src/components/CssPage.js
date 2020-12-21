import React from 'react';
import '../style.css';
import AccreditImage from './AccreditImage';
import {
  Accordion, 
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export class CssPage extends React.Component {
  render() {
    const componentName = 'CssAccordion';
    return (
      <div className="text-area">
        <h1 className="header">Cascading Style Sheet (CSS)</h1>
        <AccreditImage componentName={componentName}/>
        <p>Structure of CSS includes a selector, attribute, and value, the value is concluded with a semi-colon. Forgetting the semi-colon will make the CSS invalid and it will not execute, it won't work!</p>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label="Comments"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <code>
              /* This is a comment CSS comments begin with a forward-slash, an asterick and end with an aterick and forward-slash. CSS comments can span several lines. */
            </code>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions2-content"
            id="additional-actions2-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              // onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label="Classes"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            This is a group name used to style multiple elements, is preceeded with a period.
            <pre>
              <code>
                .class_name {'{'} <br/>
                &emsp; attribute{':'} value; <br/>
                  {'}'}
              </code>
            </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions3-content"
            id="additional-actions3-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label="IDs"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            unique name used to style a single element, is preceeded with a hashtag
            <pre>
              <code>
                #id_name {'{'} <br/>
                &emsp; attribute{':'} value; <br/>
                  {'}'}
              </code>
            </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions4-content"
            id="additional-actions4-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label="Box Model"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            styling the spacing in relation to content (HTML: text, videos, images, etc) on the page<br/>

            padding =={'>'} transparent area around the content; left, top, right, bottom<br/>
            width =={'>'} side to side; horizontal<br/>
            height =={'>'} top to bottom; veritical<br/>
            border =={'>'} outside of the padding<br/>
            margin =={'>'} space between boxes; left, top, right, bottom<br/>
            fill area =={'>'} are that gets filled with background color or background image<br/>
            text-align =={'>'} aligns the text to the page centered, left,or right<br/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      );
  }
}
