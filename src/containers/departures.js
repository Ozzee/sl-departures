import { connect } from 'react-redux'
import DeparturesTable from '../components/DeparturesTable'
import { fetchStop } from '../actions'

/**
 * This container component gives the DeparturesTable component its props
 * based on the current state.
 */

const mapStateToProps = (state, ownProps) => {
  const departures = state.schedules[ownProps.card.stopId]
  if (departures) {
    return {
      departures: departures.departures,
      card: ownProps.card
    }
  } else {
    return {
      departures: [],
      card: ownProps.card
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateDepartures: () => {
      dispatch(fetchStop(ownProps.card.stopId))
    }
  }
}

const Departures = connect(mapStateToProps, mapDispatchToProps)(DeparturesTable)

export default Departures