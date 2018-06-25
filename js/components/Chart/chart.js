import React, { Component } from 'react';
import {
  VictoryContainer,
  VictoryTheme,
  VictoryBar,
  VictoryChart
} from 'victory';
import { connect } from 'react-redux';

export class Chart extends Component {
  render() {
    const {
      datasets,
      match: { params }
    } = this.props;

    const index = datasets.findIndex(
      dataset => dataset.get('name') === params.chart
    );

    console.log(datasets.get(index));

    return <div>Chart: {params.chart}</div>;

    // return (
    //   <VictoryChart
    //     width={width}
    //     height={height}
    //     containerComponent={<VictoryContainer responsive={false} />}
    //     // theme={VictoryTheme.material}
    //     padding={{ top: 0, left: 100, right: 50, bottom: 0 }}
    //   >
    //     <VictoryBar
    //       x={d => d.id}
    //       y={d => d.price}
    //       style={{ data: { fill: '#c43a31' } }}
    //       data={data}
    //     />
    //   </VictoryChart>
    // );
  }
}

const mapStateToProps = state => ({
  datasets: state.Data.get('datasets')
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
