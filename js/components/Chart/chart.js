import React, { Component } from 'react';
import {
  VictoryContainer,
  VictoryTheme,
  VictoryBar,
  VictoryChart
} from 'victory';

export default class Chart extends Component {
  render() {
    const { data, height, width } = this.props;
    console.log(this.props);

    return (
      <VictoryChart
        width={width}
        height={height}
        containerComponent={<VictoryContainer responsive={false} />}
        // theme={VictoryTheme.material}
        padding={{ top: 0, left: 100, right: 50, bottom: 0 }}
      >
        <VictoryBar
          x={d => d.id}
          y={d => d.price}
          style={{ data: { fill: '#c43a31' } }}
          data={data}
        />
      </VictoryChart>
    );
  }
}
