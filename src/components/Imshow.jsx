import createPlotlyComponentModule from 'react-plotly.js/factory';
import Plotly from 'plotly.js-dist-min';

const createPlotlyComponent = createPlotlyComponentModule.default;

const Plot = createPlotlyComponent(Plotly);

export function Imshow({ resultado }) {

    if (!resultado) return null

    return (
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
                        title: {
                            text: `heatmap`
                        },
                        width: 800,
                        height: 800
                    }}
                />
        </div>
)}