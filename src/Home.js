import React,{Component} from 'react'
import Photo1 from './Photos/GoodFork1.jpeg'
import Photo2 from './Photos/GoodFork2.jpg'
import Display from './Display.js'
import Sidebar from './Sidebar.js'
import photos from './Data/Data.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
class Home extends Component{
    
    

    render(){

        const photo = photos;
        return(
            <Router>
           
            <div class="row">
              
                    {photo.map((e,i) =>
                        <Display 
                        photo={e.photo}
                        name={e.text}
                        key={i}
                        url={e.url}
                      
                        />
                    )}

            </div>
            </Router>
        )
    }
}

export default Home