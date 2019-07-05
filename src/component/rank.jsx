import React, { Component } from "react"
import getData from "../HOC/getData"
import Store,{actions,GETDATA}from "../redux/index"
import { connect } from "react-redux"
import {Route} from "react-router-dom"

 class Rank extends Component{
    constructor(props){
        super(props)
        Store.dispatch(actions[GETDATA](123))
        console.log(this.props)
    }
    render(){
        return <h1>排行榜</h1>
    }
    getDerviedStateFromProps(){
        
    }
}
let select=(state)=>{
    return state;
}
let handler=getData(connect(select)(Rank))
let route=()=>{
    return <Route path="/rank" component={handler}></Route>
}
export default route;