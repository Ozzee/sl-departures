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
      placeholder: 'Autocomplete',
      value,
      onChange: this.onChange
    }

    return (<Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        inputProps={inputProps}
      />)
  }
}

export default StopSearch
