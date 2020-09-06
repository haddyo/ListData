import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import {
    actionFetchList
} from "../../../actions/AppAction";

const mapStateToProps = (state, ownProps) => {
    // const tables = state.reducer.tableList;
    const chartData = state.reducer.chartData;
    return { chartData };
};

export default connect(mapStateToProps, { actionFetchList })(Dashboard);
