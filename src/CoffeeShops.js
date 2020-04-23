import React,{Component} from 'react';
import './Brunch.css';
import Display from './Display.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import coffee from './Data/CoffeeData.js'
function CoffeeShop() {
  

  return (     
          <div>   

            <div className="Page-Header"><p>coffee</p></div>
            <div class="row">
                 
                {coffee.map((e,i) =>
                    <Display 
                    color='white'
                    photo={e.photo}
                    name={e.shop}
                    key={i}
                    url={e.url}
                    />
                )}

            </div>
  
          </div>
  );
    }

export default CoffeeShop;
