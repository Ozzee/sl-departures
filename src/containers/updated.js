import { connect } from 'react-redux'
import UpdatedTime from '../components/UpdatedTime'
import moment from 'moment'
import { fetchStop, checkData } from '../actions'

/**
 * This container component will pass the time of the latest updated
 * for a stop to the UpdatedTime component as a prop.
 */

const mapStateToProps = (state, ownProps) => {
  const stop = state.schedules[ownProps.stopId]
  if (stop) {
    return {
      time: moment(stop.latestUpdate).format('HH:mm:ss'),
      timestamp: stop.latestUpdate,
      stopId: ownProps.stopId
    }
  } else {
    return {time: ''}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCard: () => {
      dispatch(fetchStop(ownProps.stopId))
    },
    check: (timestamp, stopId) => {
      dispatch(checkData(timestamp, stopId))
    }
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    time: stateProps.time,
    updateCard: dispatchProps.updateCard,
    checkData: () => dispatchProps.check(stateProps.timestamp, stateProps.stopId)
  })
}

const Updated = connect(mapStateToProps, mapDispatchToProps, mergeProps)(UpdatedTime)

export default Updated
