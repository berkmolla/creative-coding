import React from 'react'
import p5 from 'p5';
import SketchWrapper from './SketchWrapper'

class TimesTables extends SketchWrapper {
    oneDegree = 0;
    constructor(props: object) {
        super(props)
        this.oneDegree = (Math.PI / 180)
        
    }
    setup = (p5: p5, canvasParentRef: any) => {
        p5.createCanvas(1000, 1000).parent(canvasParentRef)
    }

    draw(p5: p5) {
        p5.background(255)
        let centerX = p5.width/2, 
                centerY = p5.height/2,
                radius = 300,
                numPoints = 200

        const colors = [
                '#fe938c',
                '#e6b89c',
                '#ead2ac',
                '#9cafb7',
                '#4281a4'
        ]
        
        const color = p5.color(colors[4])
        p5.stroke(color);
        p5.strokeWeight(2)
        
        let multiplier = p5.frameCount / 100
        // let multiplier = 3

        var i = 0;
        var fraction = 0;
        let gapinRadians =  (2*Math.PI) / numPoints
        while (i < numPoints) {
            fraction = ((i * multiplier) % numPoints) * gapinRadians
            // console.log(`i: ${i}, Fraction: ${fraction}, outputAngle: ${i*multiplier % numPoints}`)
            var pointX = centerX + radius * Math.cos(fraction)
            var pointY = centerY + radius * Math.sin(fraction)
            
            let nextPoint = ((i+1 * multiplier) % numPoints) * gapinRadians
            let nextPointX = centerX + radius * Math.cos(nextPoint), 
                    nextPointY = centerY + radius * Math.sin(nextPoint)
            p5.line(pointX, pointY, nextPointX, nextPointY);
            i++;
        }
    }

    render() {
        return <SketchWrapper setup={this.setup} draw={this.draw} />
      }

}

export {
    TimesTables
}