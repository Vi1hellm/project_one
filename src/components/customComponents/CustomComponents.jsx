import React from "react";

class CustomComponents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: "count:",
            number: 0,
        }
    }

    changeState() {
        this.setState({
            number: this.state.number + 1,
        });
    }

    changeState1() {
        this.setState({
            number: this.state.number - 1,
        });
    }

    render() {
        return (
            <ul className="CountLi">
                <li>{this.state.count}</li>
                <li>{this.state.number}</li>
                <button onClick={this.changeState.bind(this)}>+1</button>
                <button onClick={this.changeState1.bind(this)}>-1</button>
            </ul>
        )
    }
}


export default CustomComponents;