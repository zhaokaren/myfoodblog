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
import Display from './Display.js'

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}


function App() {

  const photo = photos;
 

  return (
      
    <Router>
      <Sidebar />
      <div className="App">
        <div className="Body">
        <Switch>
          <Route exact path="/">
        
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
          </Route>
          {photo.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.url}
                exact={route.exact}>
                  <Page 
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
