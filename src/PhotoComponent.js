import React, {Component} from 'react'
import './PhotoComponent.css'

class PhotoComponent extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {scrollTop: 0}
      }
    
      onScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = this.myRef.current.scrollTop
        console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
        this.setState({
          scrollTop: scrollTop
        })
      }
    render() {
        //const {scrollTop} = this.state;

        //const forLoop = length => {
        //    let dot = [];
        //    for (let i = 0; i < length; i++) {
        //
        //      dot.push(<span className="circle"></span>);
        //    }
        //    return dot;
        //  };

        return (
            <div ref={this.myRef} onScroll={this.onScroll}>
                 <div className="nav">
                  
                </div>
                <img src={this.props.photo} key={this.props.text} />
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default PhotoComponent;
