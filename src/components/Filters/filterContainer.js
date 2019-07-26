import { connect } from "react-redux";
import { setFilter } from "./filterActions";
import FilterView from "./filterView";

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  null,
  mapDispatchToProps
)(FilterView);
