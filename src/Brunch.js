import React,{Component} from 'react';

import './Brunch.css';
import photo1 from './Photos/EarlyBird/EarlyBird1.JPG'
import photos from './Data/Data.js'
import Display from './Display.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Page from './Page.js'
import Home from './Home.js'

function Brunch() {
  

  const photo = photos;
  let { path, url } = useRouteMatch();
  return (     
          <div>   

            <div className="Page-Header"><p>brunch</p></div>
            <div class="row">
                 
                {photo.map((e,i) =>
                    <Display 
                    color={e.color}
                    photo={e.photo}
                    name={e.name}
                    key={i}
                    url={e.url}
                    url2={url}
                    />
                )}

            </div>
  
          <Switch>

         
          </Switch>

          </div>
  );
    }

export default Brunch;
