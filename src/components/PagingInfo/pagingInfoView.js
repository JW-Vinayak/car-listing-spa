import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PagingInfo = props => {
  const { currentPage, totalPages, totalRecords } = props;
  const recordsPerPage = 10;

  const fromPage = (currentPage - 1) * recordsPerPage + 1;
  let toPage = 0;


  if (currentPage === totalPages) {
    toPage = fromPage + (totalRecords % 10) - 1;
  } else {
    toPage = fromPage + (recordsPerPage - 1);
  }

  return (
    <div className="paging-info">
      <div className="text bold">Available Cars</div>
      <div className="text">
        Showing {fromPage}-{toPage} of {totalRecords} results
      </div>
    </div>
  );
};

PagingInfo.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage,
  totalPages: state.cars.totalPages,
  totalRecords: state.cars.totalRecords
});

export default connect(mapStateToProps)(PagingInfo);
