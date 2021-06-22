import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  
  handleSearch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=SjYceCSb76H3je5lLuwOppd9ITpFQR5n&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(data => {
      let gifImages = data.data.map(gif => gif.images.original.url)
      this.setState({
        gifs: gifImages
      })
    })
  }

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}