import React, { Component } from "react"
import getData from "../HOC/getData"
import Store,{actions,GETDATA}from "../redux/index"
import { connect } from "react-redux"
import {Route} from "react-router-dom"
 class My extends Component{
    constructor(props){
        super(props)
        Store.dispatch(actions[GETDATA](123))
    }
    render(){
        return <h1>我的</h1>
    }
}
let select=(state)=>{
    return state;
}
let handler=getData(connect(select)(My))
let routes=()=>{
    return <Route path="/my" component={handler}></Route>
}
export default routes;