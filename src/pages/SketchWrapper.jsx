import React from 'react'
import Sketch from 'react-p5';

export default class SketchWrapper extends React.Component {
    render() {
        return <Sketch setup={this.props.setup} draw={this.props.draw} /> 
    }

}
