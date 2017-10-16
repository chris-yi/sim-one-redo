import React from 'react';
import { Link } from "react-router-dom"

export default function Home(){
    return (

      <div className="App">

        <div className="Header">
          <div>
            <img src="https://lh3.googleusercontent.com/Qm-AMoWn6yjecUUdQEQE1T-onzA4Zfss_9NCCwBHk25JkP4chPpzZIaQdB3HVYoa8ZNefQ=s68"/>
            <h1>SHELFIE</h1>
          </div>
        </div>

        <div className="Main">
            <div className="Shelves">
                <Link to="/shelf/a"><button>Shelf A</button></Link>
                <Link to="/shelf/b"><button>Shelf B</button></Link>
                <Link to="/shelf/c"><button>Shelf C</button></Link>
                <Link to="/shelf/d"><button>Shelf D</button></Link>
            </div>
        </div>

      </div>

    );
}