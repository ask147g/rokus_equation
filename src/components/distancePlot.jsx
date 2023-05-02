import React from "react";
import Plot from "react-plotly.js"

class DistancePlot extends React.Component {
  render() {
    return (
      <div>
        <Plot className="graph"
        data={[
            {
                x: this.props.distance,
                y: this.props.dose,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'white'}
            }
        ]}
        layout={{
            
            paper_bgcolor:"#242424",
            plot_bgcolor: "#242424",
            color: "white",
            xaxis: {
              title: {
                text: 'r, см',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: 'white'
                }
              },
            },
            yaxis: {
              title: {
                text: 'МПД, рад/с',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: 'white'
                }
              },
            },
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: 'white'
            }
        }}
    />
      </div>
    );
  }
}

export default DistancePlot;