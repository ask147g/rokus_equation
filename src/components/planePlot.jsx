import React from "react";
import Plot from "react-plotly.js"

class PlanePlot extends React.Component {
  render() {
    return (
      <div>
        <Plot className="graph"
        data={[
            {
                z: this.props.dose,
                x: this.props.xv,
                y: this.props.yv,
                type: 'contour',
                colorscale: 'Greys',
                colorbar:{
                  title: 'МПД, рад/с',
                  titleside: 'top',
                  titlefont: {
                    size: 18,
                    family: 'Courier New, monospace'
                  }
                }
            }
        ]}
        layout={{
            paper_bgcolor:"#242424",
            xaxis: {
              title: {
                text: 'x, см',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: 'white'
                }
              },
            },
            yaxis: {
              title: {
                text: 'y, см',
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

export default PlanePlot;