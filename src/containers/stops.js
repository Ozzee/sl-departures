import { connect } from 'react-redux'
import Cards from '../components/Cards'

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const Stops = connect(mapStateToProps)(Cards)

export default Stops