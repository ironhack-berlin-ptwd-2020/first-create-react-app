import React from "react"
import logo from './logo.svg';
import './App.css';

import img1 from './logo192.png'

import Userbox from "./Userbox"

// class-based component
class App extends React.Component {

  render() {
    let paragraph = <p>Welcome to my page.</p>

    let products = [
      "Hipp", "Zwiebelmettwurst", "Brezel"
    ]

    // this is the result of the products.map(str => <li>{str}</li>) mapping function
    // let productElements = [
    //   <li>Hipp</li>, <li>Zwiebelmettwurst</li>, <li>Brezel</li>
    // ]

    // let buttonClickHandler = () => {}

    return (
      <div className="App">
        <h1>Hi everyone!</h1>
        <img src={img1} alt="" />
        {paragraph}

        {/* <button onClick={buttonClickHandler}></button> */}

        <Userbox />
        <ul>
          {products.map(str => <li>{str}</li>)}
        </ul>
      </div>
    )
  }

}

export default App;
