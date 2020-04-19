import React, {Component} from 'react'
import './Sidebar.css'
import arrow from './Photos/arrow.png'
import menu from './Photos/menu.png'

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
                    <p>Brunch</p>
                    <p>Coffee Shops</p>
                    <p>Dessert</p>
                    <p>Cocktails</p>
                </div>
                <img className="Back" src={arrow}/>
                <p className="name">karen's food thoughts</p>
                <img className="Menu" src={menu} onClick={this.changeState.bind(this)}/>
            </div>
        )
    }
}

export default Sidebar
