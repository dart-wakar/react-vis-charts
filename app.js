import React from 'react';
import ReactDOM from 'react-dom';
import {RadialChart} from 'react-vis';
import 'react-vis/dist/styles/radial-chart.scss';
// import `react-vis/main.css` if you don't sass imports

export default class RadialChartExample extends React.Component {
  render() {
    return (
       <RadialChart
        innerRadius={100}
        radius={140}
        data={[
          {angle: 2},
          {angle: 6},
          {angle: 2},
          {angle: 3},
          {angle: 1}
        ]}
        width={300}
        height={300}
      />
    )
  }
}

ReactDOM.render(<RadialChartExample />, document.querySelector('#root'));