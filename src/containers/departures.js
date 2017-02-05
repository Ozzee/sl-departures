import { connect } from 'react-redux'
import DeparturesTable from '../components/DeparturesTable'
import { updateStop } from '../actions'

const mapStateToProps = (state) => {
  return {
    departures: state.testReducer.stops.fruangen.departures
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateDepartures: (id) => {
      dispatch(updateStop(id))
    }
  }
}

const Departures = connect(mapStateToProps, mapDispatchToProps)(DeparturesTable)

export default Departures