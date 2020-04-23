import React,{Component} from 'react'
import './Display.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

class Display extends Component{
    render(){

        const close = {
            borderBottom:`3px solid ${this.props.color}`,
        };
        
        return(
            <div className="box" class="col-lg-3"> 

             <Link to={`/snap${this.props.url}`}>
                <div className="container">
                    <img src={this.props.photo}/>
                </div>
                <div className="TitleBlock">
                <p className="Title" style={close}>{this.props.name}</p>
                </div>
            </Link>
            </div>
        )
    }
}

export default Display