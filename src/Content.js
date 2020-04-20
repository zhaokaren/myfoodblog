import React, {Component} from 'react';
import './Content.css';

class Content extends Component{
    render(){
        const close = {
            borderBottom:`5px solid ${this.props.color}`,
        };
        
        return(
            <div >
                <div className="Content">
                
                <p className="title" style={close} >{this.props.name}</p>
                <p className="address">{this.props.relativeLocation} | {this.props.address}</p>
                    <table align="center">
                    <tr>
                        <td valign="top">
                            <p className="MiniHead">Location: </p>
                            <p>{this.props.commute}</p>
                        </td>
                        <td valign="top">
                            <p className="MiniHead">Food for Value:</p> 
                            <p>{this.props.foodValue}</p>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <p className="MiniHead">Good for:</p>
                            <p>Brunch, Dates, Hangouts, Exploring</p>
                        </td>
                        <td valign="top">
                            <p className="MiniHead">My Rec:</p>
                            <p>Get something with the chorizo</p>
                        </td>
                    </tr>
                    </table>
        <p className="blurb"> {this.props.blurb}</p>
                </div>
            </div>
        );

    }
}
    
export default Content

