import React, { Component } from 'react';

export default class GifList extends Component {
  render(){
    return (
      <ul>
        {this.props.gifs.map((gif,idx )=> <li key={idx}><img src={gif} alt="search"/></li>)}
      </ul>
    )
  }
}