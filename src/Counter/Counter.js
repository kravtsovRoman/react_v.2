import React, { Component } from "react";

export default class Couter extends Comment {

    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={addCounter}>+</button>
                <button>-</button>
            </div>
        )
    }
}

