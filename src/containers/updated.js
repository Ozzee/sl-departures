import { connect } from 'react-redux'
import UpdatedTime from '../components/UpdatedTime'
import moment from 'moment'

const mapStateToProps = (state, ownProps) => {
  const stop = state.schedules[ownProps.stopId]
  if (stop) {
    return {time: moment(stop.latestUpdate).format('HH:mm:ss')}
  } else {
    return {time: ''}
  }
}

const Updated = connect(mapStateToProps)(UpdatedTime)

export default Updated