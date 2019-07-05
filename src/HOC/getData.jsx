import React, { Component } from "react"
let getData=function(com){
    return class getDatas extends Component{
        constructor(props){
            super(props)
            this.state={
                Com:com
            }
        }
        render(){
            let { Com } =this.state;
            return Com?<Com/>:<h1>组件不存在</h1>
        }
    }
}
export default getData;