import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    gifSearh: ""
  }

  handleOnChange = (e) => {
    this.setState({
      gifSearh: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.gifSearh)
    this.setState({gifSearh: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="search">Enter a Search Term</label>
        <input type="text" name="search" id="search" onChange={this.handleOnChange} value={this.state.gifSearh}/>
        <input type="submit" value="Find Gifs" />
      </form>
    )
  }
}