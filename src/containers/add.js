import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { addCard } from '../actions/'

const card = {
  name: 'Fruängen',
  cardId: 1,
  stopId: '9260',
  lines: [{
    number: '14',
    direction: 1
  }]
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: () => {
      dispatch(addCard(card))
    }
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(AddButton)

export default Add