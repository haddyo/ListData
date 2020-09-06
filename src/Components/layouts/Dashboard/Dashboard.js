import React, { Fragment } from "react";
// import TimeLineChartCopy from '../../Charts/TimeLineChartCopy2';
import TimeLineChart from '../../Charts/TimeLineChart';

import "./Dashboard.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    this.props.actionFetchList();
  }
  render() {
    return (
      <div id="container">
        <p>This is a Time Line Chart</p>
        <p>The data for this chart is coming from this &nbsp;
          <a target="_open" href="https://run.mocky.io/v3/df3311b9-8bff-4498-984a-33e14d62dccc">Link</a>
        </p>
        <TimeLineChart data={this.props.chartData} />
      </div>
    );
  }
}

export default Dashboard;