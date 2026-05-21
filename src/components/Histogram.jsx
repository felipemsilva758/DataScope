import createPlotlyComponentModule from 'react-plotly.js/factory';
import Plotly from 'plotly.js-dist-min';

const createPlotlyComponent = createPlotlyComponentModule.default;

const Plot = createPlotlyComponent(Plotly);

export function Histogram({ resultado }) {

    if (!resultado) return null

    return (
        <>
        <div>
            <p className='text-4xl'>Histogramas</p>
        </div>
        <div>

            {resultado.histogram.map((grafico, index) => (

                <Plot
                    key={`hist-${index}`}
                    data={[
                        {
                            x: grafico.x,
                            type: 'histogram',
                        }
                    ]}
                    layout={{
                        title: {
                            text: `${grafico.coluna}`
                        },
                        width: 500,
                        height: 400
                    }}
                />

            ))}

        </div>
        </>
)}