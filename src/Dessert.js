import React, {Component} from 'react'
import cake from './Photos/dessert.png'
import './Dessert.css'

class Dessert extends Component{
    
    render(){
        return(
            <div className="Dessert-Body">
                <img src={cake}/>
                <p>COMING SOON!</p>
            </div>

        )
    }

}

export default Dessert