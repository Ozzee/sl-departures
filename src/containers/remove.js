import { connect } from 'react-redux'
import RemoveButton from '../components/RemoveButton'
import { removeCard } from '../actions'

/*global confirm */

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => {
      if (confirm("Really remove card?")) {
        dispatch(removeCard(ownProps.cardId))        
      }
    }
  }
}

const Remove = connect(mapStateToProps, mapDispatchToProps)(RemoveButton)

export default Remove