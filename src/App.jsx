import React, { Component}from 'react';
import A from "./component/A.jsx"
import './App.css';
import { Link } from "react-router-dom"
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="App">
        <Link to="/rank">智能排序</Link>
        <Link to="/my">我的</Link>
        {this.props.children}
      </div>
    );
  }
  
}

export default App;
