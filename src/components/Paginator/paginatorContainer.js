import { connect } from "react-redux";
import Pagination from "./paginatorView";
import { setCurrentPage } from "./paginatorActions";

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage,
  totalPages: state.cars.totalPages
});

const mapDispatchToProps = dispatch => ({
  setPage: pageNumber => dispatch(setCurrentPage(pageNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
