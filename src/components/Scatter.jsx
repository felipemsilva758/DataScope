import createPlotlyComponentModule from 'react-plotly.js/factory';
import Plotly from 'plotly.js-dist-min';

const createPlotlyComponent = createPlotlyComponentModule.default;

const Plot = createPlotlyComponent(Plotly);

export function Scatter({ resultado }) {

    if (!resultado) return null
console.log(resultado)
    return (

        <div>

            {resultado.scatter.map((grafico, index) => (
                
                <Plot
                    key={`scat-${index}`}
                    data={[
                        {
                            x: grafico.x,
                            y: grafico.y,
                            type: 'scatter',
                            mode: 'markers',
                            marker: {
                                size: 4,
                               
                            },
                            name: `${grafico.col1} x ${grafico.col2}`

                        }
                    ]}
                    layout={{
                        title: {
                            text: `${grafico.col1} x ${grafico.col2}`
                        },

                         xaxis: {
                            title: {
                                text: grafico.col1
                         }
                    },
                         yaxis: {
                            title: {
                                text: grafico.col2
                         }
                    },
                        width: 500,
                        height: 400
                    }}
                />

            ))}

        </div>
)}
