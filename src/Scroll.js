import React, {Component} from 'react'
import './Scroll.css'
class Scroll extends Component{
    render(){
        const forLoop = length => {
            let dot = [];
            for (let i = 0; i < length; i++) {
    
              dot.push(<span className="circle"></span>);
            }
            return dot;
          };

        return(
            <div className="nav">
                    {forLoop(this.props.length)}
            </div>
        )
        
    }
}
export default Scroll