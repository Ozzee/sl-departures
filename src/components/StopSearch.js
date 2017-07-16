import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Autosuggest from 'react-autosuggest'

/*global API_ROOT */


class StopSearch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested({value}) {
    var that = this
    return fetch(API_ROOT + 'search/' +value)
      .then(response => response.json())
      .then(json => that.setState({suggestions: json}))
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    })
  }

  onSuggestionSelected(event, {suggestion}) {
    this.props.selectStop(suggestion.stopId)
  }


  getSuggestionValue(suggestion){
    return suggestion.name
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name} [{suggestion.stopId}]</span>
    )
  }

  shouldRenderSuggestions(value) {
    return value.trim().length > 2
  }


  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Search Stop',
      value,
      onChange: this.onChange
    }

    return (<Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        inputProps={inputProps}
      />)
  }
}

StopSearch.propTypes = {
  selectStop: React.PropTypes.func
}

export default StopSearch
