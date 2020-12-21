import React from 'react';
import '../styles/accredit-image.css';
import GirlOnLaptop from '../assets/girl-on-laptop.jpg';
import PairProgramming from '../assets/pair-programming.jpg';
import TinyDevelopers from '../assets/tiny-developers.jpg';
import WebsiteDesign from '../assets/website-design.jpg';
import { imageAuthors } from '../images';

class Popup extends React.Component {
  render() {
    return this.props.text;
  }
}

class AccreditImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      popupOpen: false, 
    }
  }

  togglePopup = () => {
    this.setState({popupOpen: !this.state.popupOpen})
  }

  render() {
    const { popupOpen } = this.state;
    const imagePaths = [
      {path1: GirlOnLaptop}, 
      {path2: PairProgramming},
      {path3: TinyDevelopers}, 
      {path4: WebsiteDesign}
    ]

    // Map image accredit conditionally, based on component using it
    const imageAccreditLink = imageAuthors.map((author, key) => {
      if (this.props.componentName === 'HomePage'){
        return (
          <div key={key} className='imageAccreditPopup'>
            {author.GirlOnLaptopAuthor}
          </div>
        )
      } else if (this.props.componentName === 'HtmlAccordion'){
        return (
          <div key={key} className='imageAccreditPopup'>
            {author.PairProgrammingAuthor}
          </div>
        )
      } else if (this.props.componentName === 'CssAccordion'){
        return (
          <div key={key} className='imageAccreditPopup'>
            {author.TinyDevelopersAuthor}
          </div>
        )
      } else {
          <div key={key} className='imageAccreditPopup'>
            {author.WebsiteDesignAuthor}
          </div>
        }
      });

    // Map image src conditionally, based on component using it
      const imageSrc = imagePaths.map((path, key) => {
        if (this.props.componentName === 'HomePage'){
          return (
            <img
              onMouseEnter={this.togglePopup}
              onMouseLeave={this.togglePopup}
              src={path.path1}
              className='text-over-img'
              width='40%'
              height='40%'
              key={key}
            />
          )
        } else if (this.props.componentName === 'HtmlAccordion'){
          return (
            <img
              onMouseEnter={this.togglePopup}
              onMouseLeave={this.togglePopup}
              src={path.path2}
              className='text-over-img'
              width='40%'
              height='40%'
              key={key}
            />
          )
        } else if (this.props.componentName === 'CssAccordion'){
          return (
            <img
              onMouseEnter={this.togglePopup}
              onMouseLeave={this.togglePopup}
              src={path.path3}
              className='text-over-img'
              width='40%'
              height='40%'
              key={key}
            />
          )
        } else {
            return (
              <img
                onMouseEnter={this.togglePopup}
                onMouseLeave={this.togglePopup}
                src={path.path4}
                className='text-over-img'
                width='40%'
                height='40%'
                key={key}
              />
            )
          }
        });
  

    return (
      <>
        <div>
          {imageSrc}
          {
            popupOpen ?
            <Popup
              text={imageAccreditLink}
              onMouseLeave={this.togglePopup}
            />
          : null
          }
        </div>
      </>
    );
  }
}

export default AccreditImage;
