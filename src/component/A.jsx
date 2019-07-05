import React, { Component , useState } from "react"
import getData from "../HOC/getData"
import Store,{actions,GETDATA}from "../redux/index"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import B from "./B"
import C from "./C"
import E from "./E"
import ThemeContent from "./theme-content"
const theme={
    light:{
        background:"pink"
    },
    dark:{
        background:"blue"
    }
}
 class A extends Component{
    constructor(props){
        super(props)
        Store.dispatch(actions[GETDATA](123))
        this.state={
            count:0
        }
        
    }
    setCount(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <ThemeContent.Provider value={theme.light}>
                <div>
                    <h1 key="1">{this.state.count}</h1>
                    <button key="2" onClick={()=>{this.setCount()}}>按钮</button>
                    <B key="3" item={this.state.count}></B>
                    <C key="4" id="333"></C>
                    <E key="5"></E>
                </div>
            </ThemeContent.Provider>
        )   
        
                   
                
            
    }
}
let select=(state)=>{
    return state;
}
let handler=getData(connect(select)(A));

let routeA=()=>{
    return <Route path="/" exact component={handler}></Route>
}
export default routeA;