import { connect } from 'react-redux'
import DeparturesTable from '../components/DeparturesTable'
import { fetchStop } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const deps = state.stopsReducer.stops[ownProps.stopId]
  return {
    departures: deps || []
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateDepartures: () => {
      dispatch(fetchStop(ownProps.stopId))
    }
  }
}

const Departures = connect(mapStateToProps, mapDispatchToProps)(DeparturesTable)

export default Departures