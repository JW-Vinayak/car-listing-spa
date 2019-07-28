import React from "react";
import { connect } from "react-redux";

const PagingInfo = props => {
  const { currentPage, totalPages, totalRecords } = props;
  const recordsPerPage = 10;
  console.log(
    currentPage,
    recordsPerPage,
    totalPages,
    currentPage * recordsPerPage
  );
  const fromPage = (currentPage - 1) * recordsPerPage + 1;
  let toPage = 0;

  console.log("paging props", currentPage === totalPages, fromPage);

  if (currentPage === totalPages) {
    toPage = fromPage + (totalRecords % 10) - 1;
  } else {
    toPage = fromPage + 9;
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

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage,
  totalPages: state.cars.totalPages,
  totalRecords: state.cars.totalRecords
});

export default connect(mapStateToProps)(PagingInfo);
