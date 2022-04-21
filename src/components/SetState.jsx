import React, { Component } from 'react'

class SetState extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }
    }

    changeCount(){
        // this.setState(
        //     {count: this.state.count + 1},
        //     ()=>{console.log(this.state.count)});
        // do not do this - this.state.count = this.state.count + 1 because it will show 0 in ui
        //because it does not render the value on ui, but if it is shown incremented value in console
        // console.log(this.state.count) //this ywill print count-1 in console because 
        //this is called before the state is set, which is known as asynchronous, to solve this, we use callback as second parameter
        this.setState(prevState => ({
            count: prevState.count + 1,
        }));
    }

    changeAllCount(){
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
    }

    render() {
        return (
        <div>
            <h4>Count - {this.state.count}</h4>
            <button onClick={() => this.changeCount()}>Change</button>
            <button onClick={() => this.changeAllCount()}>AllChange</button>
        </div>
        )
    }
};

export default SetState;

//rce tab out gives layout, rcons gives constructor
//here dos and donts are mentioned of react class component