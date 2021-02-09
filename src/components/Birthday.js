
import React, { Component } from 'react';

class Birthday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }

    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render() {
        return (<div>
            <button onClick={this.handleClick}>Birthday </button>
        </div>)
    }
}

export default Birthday;