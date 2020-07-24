import React from 'react'
import {XYPlot, LineSeries,VerticalGridLines,HorizontalGridLines,XAxis,YAxis,RadialChart} from 'react-vis';
import "react-vis/dist/style.css";

const ServerDiagram = ({totalCount,totalCurrentOccupide}) =>{
    let index=3
    let data = [{x:0,y:0},
        {x:1,y:0},
        {x:2,y:0},
        {x:3,y:0}]
    
    console.log(data)
    return(
        <div className="card z-depth-2 server-summery">
            <div>
                <div className="card-title">
                    <h6 className="card-title gray-text darken-4">Attendees change</h6>
                </div>
                <div className="div-seprator"></div>
                <div className="grey-text text-darker-3">
                    <span className="card-title">
                    <XYPlot height={300} width= {400}>
                    <XAxis />
                    <YAxis title="Number of Attendees"/>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <LineSeries color="#f9a825"  style={{strokeWidth: 3}} height={300} width={300} data={[...totalCurrentOccupide.map(item => { return {x: index++, y: item} })]} />
                    </XYPlot>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ServerDiagram