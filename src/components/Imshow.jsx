import createPlotlyComponentModule from 'react-plotly.js/factory';
import Plotly from 'plotly.js-dist-min';

const createPlotlyComponent = createPlotlyComponentModule.default;

const Plot = createPlotlyComponent(Plotly);

export function Imshow({ resultado }) {

    if (!resultado) return null

    return (
        <>
        <div>
            <p className='text-4xl'>Heatmap</p>
        </div>
        <div>
                <Plot
                    data={[
                        {
                            z: resultado.imshow.z,
                            x: resultado.imshow.labels,
                            y: resultado.imshow.labels,
                            type: 'heatmap',
                            text: resultado.imshow.z,
                            texttemplate: "%{text:.2f}"
                        }
                    ]}
                    layout={{
                        width: 800,
                        height: 800
                    }}
                />
        </div>
        </>
)}