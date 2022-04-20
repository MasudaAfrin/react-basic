import React, { Component } from "react";

class ClassProps extends Component {
    render() {
        return <h2>Hello from class component to {this.props.name}</h2>
    }
};

export default ClassProps;
