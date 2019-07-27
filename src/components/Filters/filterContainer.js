import { connect } from "react-redux";
import { setFilter } from "./filterActions";
import FilterView from "./filterView";
import { setCurrentPage } from "../Paginator/paginatorActions";

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
  setPageNumber: pageNumber => dispatch(setCurrentPage(pageNumber))
});

export default connect(
  null,
  mapDispatchToProps
)(FilterView);
