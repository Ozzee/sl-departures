import { connect } from 'react-redux'
import DeparturesTable from '../components/DeparturesTable'
import { fetchStop } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const deps = state.scheduleReducer.stops[ownProps.stop.stopId]
  return {
    departures: deps || [],
    stop: ownProps.stop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateDepartures: () => {
      dispatch(fetchStop(ownProps.stop.stopId))
    }
  }
}

const Departures = connect(mapStateToProps, mapDispatchToProps)(DeparturesTable)

export default Departures