import React,{Component} from 'react';

import './Page.css';
import Content from './Content.js'
import Photo from './Photo.js'
import Photo1 from './Photos/GoodFork1.jpeg'
import Photo2 from './Photos/GoodFork2.jpg'



class Page extends Component {
  
 render(){ 

  return (
    
    <div className="Page row">
      <Photo
        photos={this.props.photos}
      />
      <Content
        name={this.props.name}
        relativeLocation={this.props.relativeLocation}
        address={this.props.address}
        commute={this.props.commute}
        foodValue={this.props.foodValue}
        blurb={this.props.blurb}
        color={this.props.color}
      />
     
      
    </div>
  );
 }
}

export default Page;
