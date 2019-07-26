import { connect } from "react-redux";

import CarList from "./carListView";

const mapStateToProps = state => ({
  cars: state.cars.list,
  loading: state.cars.loading,
  error: state.cars.error
});

export default connect(mapStateToProps)(CarList);
