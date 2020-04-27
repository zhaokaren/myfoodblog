import React, {Component} from 'react'
import './Sidebar.css'
import arrow from './Photos/arrow.png'
import menu from './Photos/menu.png'
import egg from './Photos/egg.png'
import cake from './Photos/dessert.png'
import coffee from './Photos/coffee.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {value:false};
    }
    changeState(){
        this.setState({value: !this.state.value});
    }

   
    render(){
        const x = 300;
        const y = 0;
        const x1 = 200;
        const open = { 
        transform: `translate(${x}px, ${y}px)`,
        transition: 'all 0.5s'
        };
        const close = {
            transform: `translate(-0px, ${y}px)`,
            transition: 'all 0.5s',
        };
       
        let btn_class = this.state.value ? open: close;
        
       
        return(
            
            <div className="sidebar" style={btn_class}>
                
                <div className="hidden">
                    <p>MENU</p>
                    <Link to="/"><p className="navMenu"onClick={this.changeState.bind(this)}>Home</p></Link>
                    <img src={egg}/>
                    <Link to="/brunch"><p className="navMenu" onClick={this.changeState.bind(this)}>Brunch</p></Link>
                    <img src={coffee}/>
                    <Link to ="/coffee"><p className="navMenu" onClick={this.changeState.bind(this)}>Coffee Shops</p></Link>
                    <img src={cake}/>
                    <Link to ="/dessert"><p className="navMenu" onClick={this.changeState.bind(this)}>Dessert</p></Link>
                    <p>Cocktails</p>
                </div>
                <img className="Back" src={arrow}/>
                <Link to="/"><p className="name" >karen's food thoughts</p></Link>
                <div class="menu-container">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <img className="Menu" src={menu} onClick={this.changeState.bind(this)}/>
            </div>
        )
    }
}

export default Sidebar
