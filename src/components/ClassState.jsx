import React, { Component } from 'react';

class ClassState extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor',
            status: 0,
            btn_txt: 'Subscribe'
        } 
    }

    changeMessage(){
        if(this.state.status === 0){
            this.setState({
                message: 'Thank you for subscribing',
                status: 1,
                btn_txt: 'Unsubscribe'
            })
        } else{
            this.setState({
                message: 'Welcome Visitor',
                status: 0,
                btn_txt: 'Subscribe'
            })
        }
    }

    render(){
        return(
            <div>
                <h1>
                   {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>{this.state.btn_txt}</button>
            </div>
        )
    }
};

export default ClassState;