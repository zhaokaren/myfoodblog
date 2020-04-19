import React, {Component} from 'react';
import Photo1 from './Photos/GoodFork1.jpeg'
import Photo2 from './Photos/GoodFork2.jpg'
import './Photo.css'
import PhotoComponent from './PhotoComponent.js'



class Photo extends Component{

    render(){
        return(
            <div className="photo" >
                {this.props.photos.map((e,i) =>
                        <PhotoComponent
                        photo={e.photo}
                        text={e.text}
                        key={i}
                        length={this.props.photos.length}
                        />
                    )}
                
            </div>
        );
    }
}

export default Photo