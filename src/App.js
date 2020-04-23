import React from 'react';

import './App.css';
import Page from './Page.js'
import Home from './Home.js'
import Sidebar from './Sidebar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import photos from './Data/Data.js'
import Brunch from './Brunch.js'
import Coffee from './CoffeeShops.js'
import Dessert from './Dessert.js'

function App() {

  const photo = photos;
 

  return (
      
    <Router>
      <Sidebar />
  
      <div className="App">
        
        <div className="Body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/brunch">
            <Brunch/>  
          </Route> 
          <Route path="/coffee">
            <Coffee/>
          </Route>
          <Route path="/dessert">
            <Dessert/>
          </Route>
      
       
          
          {photo.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              
              <Route
                key={index}
                path={`/snap${route.url}`}>
                  <Page 
                    color={route.color}
                    name={route.name}
                    relativeLocation={route.relativeLocation}
                    address={route.address}
                    commute={route.commute}
                    foodValue={route.foodValue}
                    blurb={route.blurb}
                    photos={route.photos}
                  />
              </Route>
          ))}
            
        </Switch>
       </div>
      </div>
    </Router>
  );
}

export default App;
