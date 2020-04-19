import React,{Component} from 'react'
import './Display.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

class Display extends Component{
    render(){


        return(
            <div className="box" class="col-lg-3"> 
             <Link to={this.props.url}>
                <div className="container">
                    <img src={this.props.photo}/>
                </div>
                <p className="Title">{this.props.name}</p>
            </Link>
            </div>
        )
    }
}

export default Display