import React from 'react'
import {XYPlot, LineSeries,VerticalGridLines,HorizontalGridLines,XAxis,YAxis,RadialChart} from 'react-vis';
import "react-vis/dist/style.css";

const ServerDiagram = ({totalCount,totalCurrentOccupide}) =>{
    let index=3
    let data = [{x:0,y:0},
        {x:1,y:2}]
    
    console.log(data)
    return(
        <div className="card z-depth-2 server-summery">
        <div className="card-content grey-text text-darker-3">
                <span className="card-title">
                <XYPlot height={300} width= {300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries height={300} width={300} data={[...data,...totalCurrentOccupide.map(item => { return {x: index++, y: item} })]} />
                </XYPlot>
                </span>
        </div>
        </div>
    )
}

export default ServerDiagram