import { connect } from 'react-redux'
import Cards from '../components/Cards'

/**
 * This container component generates the information for the cards in the
 * app from the current state.
 */

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const Stops = connect(mapStateToProps)(Cards)

export default Stops