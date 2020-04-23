import React,{Component} from 'react'
import Photo1 from './Photos/GoodFork1.jpeg'
import Photo2 from './Photos/GoodFork2.jpg'
import Display from './Display.js'
import Sidebar from './Sidebar.js'
import photos from './Data/Data.js'

import './Home.css'
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
            <div className="homeBody row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                 <p className="home-header">welcome!</p>
                 <p>I created this blog as a way for me to document/archive all the resturants/coffee shops/bars that I visit. If you know me, you probably know that I love food and beautiful interiors. Hopefully you will find this site useful for finding new resturants, or just exploring new spots in Toronto. I started working on this as a creative outlet to express my thoughts and find different ways to express myself.</p>
                </div>
                <div className="col-lg-2"></div>
            </div>

        )
    }
}

export default Home