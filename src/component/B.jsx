import React, { Component } from "react"
import getData from "../HOC/getData"
import Store,{actions,GETDATA}from "../redux/index"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
 class B extends Component{
    constructor(props){
        super(props)
        //Store.dispatch(actions[GETDATA](123))
        this.state={
            num:this.props.item
        }
    }
    static getDerivedStateFromProps(props, state){
        if(props.item!=state.num){
            return {
                num:props.item
            }
        }
        return null;
    }
    //
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 我们是否在 list 中添加新的 items ？
        // 捕获滚动​​位置以便我们稍后调整滚动位置。
        // if (prevProps.list.length < this.props.list.length) {
        //   const list = this.listRef.current;
        //   return list.scrollHeight - list.scrollTop;
        // }
        return null;
      }
    
      componentDidUpdate(prevProps, prevState, snapshot) {
        // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
        // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
        //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
        // if (snapshot !== null) {
        //   const list = this.listRef.current;
        //   list.scrollTop = list.scrollHeight - snapshot;
        // }
      }
    
    render(){
        return <h1>{this.state.num}</h1>
    }
}

export default B;