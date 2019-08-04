import { connect } from "react-redux";
import { fetchCars } from "./carListActions";
import CarList from "./carListView";

const mapStateToProps = state => ({
  cars: state.cars.list,
  loading: state.cars.loading,
  error: state.cars.error,
  filters: state.filters,
  pagination: state.pagination,
  mileage: state.sorter.mileage
});

const mapDispatchToProps = dispatch => ({
  fetchCars: () => dispatch(fetchCars())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList);
