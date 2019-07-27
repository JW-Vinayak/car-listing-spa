import { connect } from 'react-redux';
import { setSortOrder } from './sorterActions';
import SorterView from './sorterView'

const mapStateToProps = state => ({
  sortOrder: state.sorter.sortOrder
})

const mapDispatchToProps = dispatch => ({
  setSortOrderInStore: (sortOrder) => dispatch(setSortOrder(sortOrder))
})

export default connect(mapStateToProps, mapDispatchToProps)(SorterView)
