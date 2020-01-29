import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }
    incrementClickCount = () => {
        this.setState( previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    render () {
        return (
            <button onClick={this.incrementClickCount}>{ this.state.timesClicked }</button>
        )
    }
}