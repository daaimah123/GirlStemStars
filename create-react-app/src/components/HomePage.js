import React from 'react';
import AccreditImage from './AccreditImage';
import '../style.css';

export class HomePage extends React.Component {

  render() {
    const componentName = 'HomePage';
    return (
    <div>
      <h1 className="header">Why web development?</h1>
      <AccreditImage componentName={componentName}/>
      <ol>
        <li>Learning Everyday</li>
        <li>High Demand Profession</li>
        <li>Remote Work</li>
        <li>Competitive Pay</li>
        <li>Entrepreneurship</li>
        <li>Creative Outlet</li>
      </ol>

      <h3>Essential Tools</h3>
      <p>google, IDE / text editor, great attitude, curiosity</p>
    </div>
    );
  }
}
