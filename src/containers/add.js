import { connect } from 'react-redux'
import AddCardForm from '../components/AddCardForm'
import { addCard } from '../actions/'


const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    addCard: dispatchProps.addCard,
    close: ownProps.close
  })
}

const Add = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddCardForm)

export default Add
